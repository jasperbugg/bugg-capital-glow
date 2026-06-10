import { useState } from "react";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhitepaperModal({
  open,
  onClose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
}) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleClose = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const docTitle = title || t("Whitepaper", "Whitepaper");
    const subject = encodeURIComponent(t(`Aanvraag: ${docTitle}`, `Request: ${docTitle}`));
    const body = encodeURIComponent(
      t(
        `Naam: ${name}\nE-mail: ${email}\n\nGraag de documentatie (${docTitle}) ontvangen.`,
        `Name: ${name}\nEmail: ${email}\n\nPlease send me the documentation (${docTitle}).`,
      ),
    );
    window.location.href = `mailto:stef@bugg.nl?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={handleClose}
    >
      <div className="relative w-full max-w-md panel p-8" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Check size={24} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{t("Bedankt.", "Thank you.")}</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {t(
                "U ontvangt de documentatie zo spoedig mogelijk.",
                "You will receive the documentation shortly.",
              )}
            </p>
            <button onClick={handleClose} className="btn-ghost mt-6">
              {t("Sluiten", "Close")}
            </button>
          </div>
        ) : (
          <>
            <div className="eyebrow">{title || t("Documentatie", "Documentation")}</div>
            <h3 className="mt-4 text-2xl font-semibold">
              {t("Ontvang de documentatie", "Receive the documentation")}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(
                "Vul uw gegevens in. U ontvangt de documentatie per e-mail.",
                "Enter your details. We'll send the documentation by email.",
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
          </>
        )}
      </div>
    </div>
  );
}
