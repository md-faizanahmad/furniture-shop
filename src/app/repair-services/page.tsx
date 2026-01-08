import { ServiceBookingUI } from "@/pages/repair-services/ServiceBookingUI";
import Image from "next/image";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] selection:bg-stone-200">
      {/* Editorial Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0C0C0C]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0C0C0C] z-10" />
          <Image
            width={100}
            height={100}
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Office Architecture"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <div>
            <span className="text-stone-500 text-[10px] uppercase tracking-[0.5em] font-bold block mb-6">
              Establishment & Care
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8">
              Bespoke{" "}
              <span className="italic font-serif text-stone-400">
                Concierge
              </span>
            </h1>
            <p className="text-stone-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Initiate a partnership with our design laboratory. Whether
              crafting a new HQ or restoring an archive, excellence is our
              baseline.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Booking Section */}
      <section className="relative -mt-24 z-30 pb-32">
        <ServiceBookingUI />
      </section>

      {/* Trust Signifiers */}
      <section className="container mx-auto px-6 py-20 border-t border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-stone-500">
          <div className="space-y-4">
            <h4 className="text-stone-900 font-bold text-[10px] uppercase tracking-widest">
              Global Logistics
            </h4>
            <p className="text-sm font-light leading-relaxed italic">
              &quot;Our white-glove team handles installation across 40+
              countries with local expertise.&quot;
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-stone-900 font-bold text-[10px] uppercase tracking-widest">
              Material Integrity
            </h4>
            <p className="text-sm font-light leading-relaxed italic">
              &quot;All restoration projects use original-spec materials to
              maintain the heritage value of your assets.&quot;
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-stone-900 font-bold text-[10px] uppercase tracking-widest">
              Confidentiality
            </h4>
            <p className="text-sm font-light leading-relaxed italic">
              &quot;We provide NDA-backed planning for high-security executive
              environments and private offices.&quot;
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
