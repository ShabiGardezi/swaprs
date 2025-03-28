import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://static.wixstatic.com/media/539068_2f59720508a3478f942c03fa6dde6db3~mv2.png/v1/fill/w_1217,h_709,al_c,q_90,enc_avif,quality_auto/539068_2f59720508a3478f942c03fa6dde6db3~mv2.png"
        alt="Photographer"
        fill
        priority
        className="object-cover object-center object-top object-left w-full h-full"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-white/90 rounded-xl p-10 max-w-xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Be part of our Swaprs</h2>
          <p className="mb-2 text-lg">
            If you're interested in <b>swpars</b>,
          </p>
          <p className="mb-2 text-lg">we're interested in you.</p>
          <p className="mb-8 text-lg">Sign up to receive our newsletter too.</p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="w-full bg-pink-500 text-white py-3 rounded-full font-medium hover:bg-pink-600 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
