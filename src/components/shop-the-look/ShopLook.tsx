import { ShopLookClient } from "./ShopLookClient";

const LOOK_DATA = {
  title: "The Solstice Suite",
  description: "A study in balanced light and organic geometry.",
  image: "/The-SolsticeSuite.png",
  hotspots: [
    {
      id: "p1",
      x: 35,
      y: 65,
      name: "Nizam Sofa",
      price: "₹1,85,000",
      href: "/products/nizam-sofa",
    },
    {
      id: "p2",
      x: 55, // leftright
      y: 19, // topbottom
      name: "Halo Pendant",
      price: "₹28,500",
      href: "/products/halo-pendant",
    },
    {
      id: "p3",
      x: 50,
      y: 80,
      name: "Onyx Coffee Table",
      price: "₹42,000",
      href: "/products/onyx-table",
    },
  ],
};

export default function ShopLook() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-lg">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">
            Discovery
          </span>
          <h2 className="text-5xl font-light tracking-tighter text-stone-900 mb-6">
            {LOOK_DATA.title}
          </h2>
          <p className="text-stone-500 font-light">{LOOK_DATA.description}</p>
        </div>
        <ShopLookClient data={LOOK_DATA} />
      </div>
    </section>
  );
}
