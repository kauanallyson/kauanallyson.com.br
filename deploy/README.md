# Deploy no OCI (Oracle Cloud)

Stack: **A1 Flex (1 OCPU / 6 GB, ARM) · Ubuntu 26.04 LTS · Docker · Traefik (HTTPS Let's Encrypt)**.
A imagem é construída no próprio servidor. Cada push na `main` roda o CI e, se passar,
o GitHub Actions entra no servidor por SSH e executa `docker compose up -d --build`.

## 1. Conta e orçamento

1. Conta OCI em **Pay As You Go** (os recursos Always Free continuam gratuitos).
2. Billing & Cost Management → **Budgets** → crie um orçamento (ex.: US$ 1) com alerta por e-mail.
   Fique dentro do Always Free: A1 até **2 OCPU / 12 GB no total** da tenancy.

## 2. Criar a instância

Compute → Instances → **Create instance**

- Image: **Canonical Ubuntu 26.04** (aarch64). Se ainda não aparecer, use 24.04 e faça upgrade depois.
- Shape: **VM.Standard.A1.Flex** → 1 OCPU, 6 GB.
- Networking: VCN com subnet pública, **Assign a public IPv4 address**.
- SSH keys: cole sua chave pública pessoal (`~/.ssh/id_ed25519.pub`).
- Se der _Out of capacity_, tente outro Availability Domain ou espere alguns minutos.

Depois: Networking → **Reserved Public IPs** → reserve um IP e associe à VNIC da instância
(assim o IP não muda se a instância reiniciar/recriar).

## 3. Liberar portas 80 e 443 (dois lugares!)

**a) Security List da subnet** (Networking → VCN → Security Lists → Default) → Add Ingress Rules:

| Source CIDR | Protocol | Dest. port |
| ----------- | -------- | ---------- |
| 0.0.0.0/0   | TCP      | 80         |
| 0.0.0.0/0   | TCP      | 443        |

**b) iptables dentro da VM** (as imagens Ubuntu da Oracle bloqueiam tudo exceto 22):

```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

## 4. Preparar o servidor

```bash
ssh ubuntu@SEU_IP

sudo apt update && sudo apt -y upgrade

# Docker (script oficial; instala engine + compose plugin)
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker ubuntu
exit   # saia e entre de novo para o grupo docker valer

# Swap de 2 GB (folga para o build do Next.js)
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## 5. DNS

No painel do domínio (Registro.br ou onde estiver o DNS de `kauanallyson.com.br`):

| Tipo | Nome  | Valor        |
| ---- | ----- | ------------ |
| A    | `@`   | IP reservado |
| A    | `www` | IP reservado |

Espere propagar (`dig +short kauanallyson.com.br`) **antes** do primeiro `up`, senão o
Let's Encrypt falha a validação.

## 6. Primeiro deploy (manual)

```bash
git clone https://github.com/kauanallyson/kauanallyson.com.br.git ~/kauanallyson
cd ~/kauanallyson
cp deploy/.env.example .env   # confira DOMAIN e ACME_EMAIL
docker compose up -d --build
docker compose logs -f traefik   # acompanhe a emissão do certificado
```

Abra https://kauanallyson.com.br.

## 7. Deploy automático (GitHub Actions)

Crie uma chave **só para o deploy** (no seu Mac):

```bash
ssh-keygen -t ed25519 -f ~/.ssh/kauanallyson_deploy -N "" -C "github-actions-deploy"
ssh-copy-id -i ~/.ssh/kauanallyson_deploy.pub ubuntu@SEU_IP
```

No GitHub → repo → Settings → Secrets and variables → Actions → **New repository secret**:

| Secret     | Valor                                                        |
| ---------- | ------------------------------------------------------------ |
| `SSH_HOST` | IP reservado                                                 |
| `SSH_USER` | `ubuntu`                                                     |
| `SSH_KEY`  | conteúdo de `~/.ssh/kauanallyson_deploy` (chave **privada**) |

Pronto: cada push na `main` roda Biome + build e, se passar, atualiza o servidor.

## Comandos úteis

```bash
docker compose ps
docker compose logs -f portfolio
docker compose up -d --build     # rebuild manual
docker system df                 # espaço usado por imagens
```
