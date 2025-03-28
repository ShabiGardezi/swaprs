import Image from "next/image";

export default function Partners() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-2xl font-bold text-blue-800">Backed by:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20 items-center">
          {/* First row */}
          <div className="hidden md:block"></div>{" "}
          {/* Empty space for alignment */}
          <div className="flex justify-center">
            <Image
              src="https://static.wixstatic.com/media/539068_24583b73efd04495813f0fdd47dea30a~mv2.png/v1/fill/w_248,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/techstars%20logo.png"
              alt="Techstars"
              width={180}
              height={50}
              className="h-auto w-auto max-h-10 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/new-frontiers-logo.png"
              alt="New Frontiers"
              width={180}
              height={50}
              className="h-auto w-auto max-h-16 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/dogpatch-labs-logo.png"
              alt="Dogpatch Labs"
              width={180}
              height={50}
              className="h-auto w-auto max-h-10 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/portershed-logo.png"
              alt="PorterShed"
              width={180}
              height={50}
              className="h-auto w-auto max-h-16 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Second row */}
          <div className="flex justify-center">
            <Image
              src="/launchpool-logo.png"
              alt="Launchpool Web3 techstars Accelerator"
              width={180}
              height={50}
              className="h-auto w-auto max-h-16 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/ireland-together-logo.png"
              alt="Ireland Together"
              width={180}
              height={50}
              className="h-auto w-auto max-h-12 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/block-start-logo.png"
              alt="Block Start"
              width={180}
              height={50}
              className="h-auto w-auto max-h-16 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/republic-of-work-logo.png"
              alt="Republic of Work"
              width={180}
              height={50}
              className="h-auto w-auto max-h-12 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/empower-logo.png"
              alt="Empower Female Entrepreneurship"
              width={180}
              height={50}
              className="h-auto w-auto max-h-12 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
