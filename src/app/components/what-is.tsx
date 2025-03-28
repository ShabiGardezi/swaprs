import Image from "next/image";
import Link from "next/link";

export default function WhatIs() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-white">
            WHAT IS BARTERCHAIN
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 py-8 text-center">
          <p className="text-gray-500">
            A platform where you can exchange services without money. Trade your
            skills for other skills you need.
          </p>
          <p className="text-gray-500">
            Our community connects all kinds of talents from different fields.
          </p>
          <div className="flex justify-center space-x-4 py-8 text-center items-center flex-wrap">
            <Link
              href="#"
              // className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90"
            >
              <Image
                src="https://static.wixstatic.com/media/539068_3eea24d78905468eb4e345824978acb2~mv2.png/v1/fill/w_221,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png"
                alt="Apple Store"
                width={120}
                height={150}
                className="h-16 w-auto"
              />
            </Link>
            <Link
              href="#"
              // className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90"
            >
              <Image
                src="https://static.wixstatic.com/media/539068_853ed8ca717242e5abea295764c31308~mv2.png/v1/fill/w_259,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%20867.png"
                alt="Google Play"
                width={120}
                height={150}
                className="h-16 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
