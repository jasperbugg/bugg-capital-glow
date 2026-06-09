import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "Investments — Platformen waarop wij actief zijn | BUGG Capital" },
      { name: "description", content: "Van Groupon naar Amazon naar Airbnb. De platformen die BUGG begrijpt — en bespeelt." },
      { property: "og:title", content: "Investments — Platformen waarop wij actief zijn | BUGG Capital" },
      { property: "og:description", content: "BUGG begrijpt platforms. Hier de platformen waarop we actief waren en zijn." },
    ],
  }),
  component: Investments,
});

const platforms = ["Groupon", "Amazon", "Bol.com", "Meta", "Instagram", "YouTube", "Spotify", "Airbnb", "Booking.com", "VRBO", "Expedia"];

function Investments() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bugg-grid bugg-grid-fade" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="eyebrow">Investments</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            Wij begrijpen<br /><span className="italic-accent">platforms.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Altijd hetzelfde idee: begrijp hoe een platform werkt, speel het beter dan de rest. Hier de platformen waarop wij actief waren — en zijn.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="panel p-8 md:p-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Platformen waarop wij actief waren en zijn</div>
            <div className="mt-6 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span key={p} className="inline-flex items-center px-4 py-2 border border-border text-sm hover:border-primary transition-colors">
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              De volledige route van platform builder naar vastgoedfonds — van SvB Group en Colengo tot Fangage en Specialstays — staat beschreven onder <a href="/over-ons" className="text-primary hover:underline">Over ons</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
