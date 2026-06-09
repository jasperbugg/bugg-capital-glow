import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Heart, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

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
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
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

      {/* INSTAGRAM FEED */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="eyebrow">Volg ons</div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Wat we<br /><span className="italic-accent">vandaag doen.</span>
              </h2>
            </div>
            <p className="text-muted-foreground self-end leading-relaxed">
              Achter de schermen bij BUGG en Specialstays — nieuwe panden, transformaties, events en het team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { i: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=70", c: "The Windmill — renovatie week 12" },
              { i: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=600&q=70", c: "C50 Ignis — nieuwe foto's" },
              { i: "https://cdn-cms.bookingexperts.com/media/3743/31/optimized.jpg", c: "Villa Grimbia · oplevering" },
              { i: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=70", c: "Salpstraat · gast review 9.4" },
              { i: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=70", c: "Team-bezoek Belgisch Limburg" },
              { i: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=70", c: "Pijplijn-tour mei" },
            ].map((p, idx) => (
              <a key={idx} href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="group relative block aspect-square overflow-hidden">
                <img src={p.i} alt={p.c} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-background/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <Instagram size={20} className="text-primary" />
                  <p className="mt-3 text-xs text-foreground leading-snug">{p.c}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Heart size={12} /> 124</span>
                    <span className="inline-flex items-center gap-1"><MessageCircle size={12} /> 12</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn-primary">
              <Instagram size={16} /> @buggcapital op Instagram
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="btn-ghost">
              <Linkedin size={16} /> LinkedIn
            </a>
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
