import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export default function CtaBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#c9a227] to-[#e8d48a] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2d3748] sm:text-4xl">Behöver du reparation?</h2>
              <p className="mt-4 text-lg text-[#2d3748]/80">
                Besök oss på {getFullAddress()} eller ring {business.phone}.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href={business.bookingUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#2d3748] px-8 py-4 font-semibold text-white transition hover:bg-[#4a5568]"
              >
                {business.bookingLabel}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#2d3748] bg-transparent px-8 py-4 font-semibold text-[#2d3748] transition hover:bg-[#2d3748]/10"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
