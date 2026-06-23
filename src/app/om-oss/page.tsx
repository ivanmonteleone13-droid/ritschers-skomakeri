import type { Metadata } from "next";
import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om oss",
  description: `Lär känna ${business.name} — skomakeri på Prästgårdsgatan 1, Uppsala.`,
};

export default function AboutPage() {
  const aboutImage = "aboutImage" in business ? business.aboutImage : null;

  return (
    <>
      <section className="bg-gradient-to-br from-[#2d3748] to-[#4a5568] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Om {business.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">{business.about.headline}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            {aboutImage ? (
              <img
                src={aboutImage}
                alt={`${business.name} — ${getFullAddress()}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2d3748]">{business.about.headline}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4a5568]/80">
              {business.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#2d3748]">Vill du veta mer?</h2>
          <p className="mt-4 text-[#4a5568]/70">Ring {business.phone} eller besök oss på Prästgårdsgatan 1.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-[#4a5568] px-8 py-4 font-semibold text-white transition hover:bg-[#2d3748]"
            >
              Kontakta oss
            </Link>
            <a
              href={business.bookingUrl}
              className="rounded-full border border-[#4a5568] px-8 py-4 font-semibold text-[#4a5568] transition hover:bg-white"
            >
              {business.bookingLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
