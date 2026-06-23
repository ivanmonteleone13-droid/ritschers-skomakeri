import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Tjänster",
  description: `Skoreparation och läderlagning hos ${business.name} i Uppsala.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#2d3748] to-[#4a5568] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Tjänster</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Reparation och underhåll av skodon och lädervaror — ring för pris och väntetid.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6">
            {business.services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col gap-4 rounded-2xl border border-[#4a5568]/10 bg-[#f7fafc] p-6"
              >
                <h2 className="text-xl font-semibold text-[#2d3748]">{service.name}</h2>
                <p className="text-sm leading-relaxed text-[#4a5568]/70">{service.description}</p>
                <p className="text-xs text-[#4a5568]/60">{service.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-[#c9a227]/30 bg-[#f7fafc] p-6 text-sm text-[#2d3748]">
            <p>
              <strong>Ring:</strong> {business.phone}
            </p>
            <p className="mt-2">
              <strong>E-post:</strong> {business.email}
            </p>
          </div>
          <div className="mt-10 text-center">
            <a
              href={business.bookingUrl}
              className="inline-flex rounded-full bg-[#4a5568] px-8 py-4 font-semibold text-white transition hover:bg-[#2d3748]"
            >
              {business.bookingLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
