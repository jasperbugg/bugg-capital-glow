import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhitepaperModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(t("Whitepaper aanvraag", "Whitepaper request"));
    const body = encodeURIComponent(
      t(
        `Naam: ${name}\nE-mail: ${email}\n\nGraag de BUGG Capital whitepaper ontvangen.`,
        `Name: ${name}\nEmail: ${email}\n\nPlease send me the BUGG Capital whitepaper.`,
      ),
    );
    window.location.href = `mailto:stef@bugg.nl?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md panel p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="eyebrow">{t("Whitepaper", "Whitepaper")}</div>
        <h3 className="mt-4 text-2xl font-semibold">
          {t("Download de BUGG whitepaper", "Download the BUGG whitepaper")}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(
            "Vul uw gegevens in. U ontvangt de whitepaper per e-mail.",
            "Enter your details. We'll send the whitepaper by email.",
          )}
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("Naam", "Name")}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full bg-transparent border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("E-mail", "Email")}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full bg-transparent border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            {t("Verstuur aanvraag", "Send request")}
          </button>
        </form>
      </div>
    </div>
  );
}
