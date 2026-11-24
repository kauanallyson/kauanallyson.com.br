"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyEmailButton({ email }: { email: string }) {
	const [copied, setCopied] = useState(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			window.location.href = `mailto:${email}`;
		}
	}

	return (
		<Button type="button" variant="outline" size="sm" onClick={copy}>
			{copied ? <Check /> : <Copy />}
			<span aria-live="polite">{copied ? "Copiado!" : "Copiar"}</span>
		</Button>
	);
}
