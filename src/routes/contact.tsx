import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Laten we kennismaken | BUGG Capital" },
      { name: "description", content: "Geen pitch, geen druk. Een gesprek over BUGG, de fondsen en of het bij u past." },
      { property: "og:title", content: "Contact — Laten we kennismaken | BUGG Capital" },
      { property: "og:description", content: "Plan een afspraak met het BUGG team. Stef van Boekel, Commercieel Partner." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="section-blue relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            Laten we<br /><span className="italic-accent">kennismaken.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Geen pitch, geen druk. Een gesprek over BUGG, de fondsen en of het bij u past.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 panel p-8 md:p-10">
            <div className="eyebrow">Aanvraag</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Informatie<br /><span className="italic-accent">aanvragen.</span>
            </h2>

            {sent ? (
              <div className="mt-10 p-8 border border-primary/40 bg-primary/5">
                <h3 className="text-xl font-semibold">Bedankt voor uw aanvraag.</h3>
                <p className="mt-2 text-muted-foreground">Wij nemen binnen één werkdag persoonlijk contact op.</p>
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Naam *" name="naam" required />
                  <Field label="E-mail *" name="email" type="email" required />
                  <Field label="Telefoon" name="tel" />
                  <Field label="Organisatie" name="org" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Interesse in
                  </label>
                  <select className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary">
                    <option>Selecteer</option>
                    <option>Lacuna Fund — Equity co-ownership (12%+)</option>
                    <option>Lama Fund — Equity co-ownership (14%+)</option>
                    <option>Dataroom toegang</option>
                    <option>Case study download</option>
                    <option>Algemene informatie over BUGG</option>
                    <option>Pand bezoeken in Belgisch Limburg</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Bericht</label>
                  <textarea rows={4} className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
                </div>

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1 accent-primary" />
                  <span>Ik bevestig een gekwalificeerde belegger te zijn in de zin van de Wft *</span>
                </label>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1 accent-primary" />
                  <span>Ik ga akkoord met de privacyverklaring *</span>
                </label>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Verstuur aanvraag <ArrowRight size={16} />
                </button>

                <p className="text-xs text-muted-foreground pt-4">
                  BUGG Capital beheert beleggingsfondsen uitsluitend toegankelijk voor gekwalificeerde beleggers. Alle informatie wordt vertrouwelijk behandeld.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="panel p-8">
              <div className="eyebrow">Direct contact</div>
              <h3 className="mt-4 text-2xl font-bold">
                Spreek direct<br /><span className="italic-accent">met het team.</span>
              </h3>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="font-semibold">Stef van Boekel</div>
                  <div className="text-xs uppercase tracking-widest text-primary mt-0.5">Commercieel Partner</div>
                  <p className="mt-2 text-sm text-muted-foreground">Vragen over participatie, fondsen en documentatie.</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <a href="mailto:stef@bugg.nl" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                      <Mail size={14} /> stef@bugg.nl
                    </a>
                    <a href="https://calendly.com/stef-bugg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                      Afspraak inplannen →
                    </a>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="font-semibold">Jasper Schrijver</div>
                  <div className="text-xs uppercase tracking-widest text-primary mt-0.5">Managing Partner · Founder</div>
                  <a href="https://www.linkedin.com/in/jschrijver/" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                    <Linkedin size={14} /> LinkedIn →
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="panel p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">NL Kantoor</div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin size={14} className="mt-1 text-primary flex-shrink-0" />
                  <div>Oude Maasstraat 31<br />6211 HM Maastricht</div>
                </div>
              </div>
              <div className="panel p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">BE Kantoor</div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin size={14} className="mt-1 text-primary flex-shrink-0" />
                  <div>Belgisch Limburg<br />Grensregio NL–BE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="eyebrow mb-12">Aankomende events</div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { m: "Juni", t: "Open dag portfolio", s: "Bezoek Lacuna objecten · Belgisch Limburg" },
              { m: "Juli", t: "Investeerdersavond", s: "Toelichting Lama Fund · Maastricht" },
              { m: "Sep", t: "The Windmill lancering", s: "Opening Lama Fund pilot object" },
            ].map((e) => (
              <div key={e.t} className="bg-background p-8">
                <div className="text-5xl font-bold text-primary/40">{e.m}</div>
                <h3 className="mt-4 text-lg font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.s}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="mailto:stef@bugg.nl?subject=Aanmelden%20event" className="btn-ghost">
              Aanmelden voor een event <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section-blue border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="eyebrow mb-12">Instagram</div>

          <div className="panel p-8 md:p-10">
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
              <div className="w-24 h-24 rounded-full bg-primary/15 text-primary flex items-center justify-center text-3xl font-bold">
                B
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div className="text-xl font-semibold">bugg.capital</div>
                  <a
                    href="https://instagram.com/bugg.capital"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost text-xs"
                  >
                    Volg op Instagram <ArrowRight size={14} />
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                  <span><strong className="text-foreground">20</strong> berichten</span>
                  <span><strong className="text-foreground">276</strong> volgers</span>
                  <span><strong className="text-foreground">578</strong> volgend</span>
                </div>
                <div className="mt-4 text-sm leading-relaxed">
                  <div className="font-semibold">Platform-driven real asset investing</div>
                  <div className="text-muted-foreground">📍 Lanaken — Maastricht (BE/NL)</div>
                  <div className="text-muted-foreground">BUILT.TO.COMPOUND.</div>
                  <div className="text-muted-foreground">🤝 By Invitation</div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}
