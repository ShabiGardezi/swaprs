"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionDiv = motion.div as any;

export default function AppMain() {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* Full-width image with animation */}
      <MotionDiv
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <Image
          src="/images/app-main.png"
          alt="App user"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </MotionDiv>

      {/* Content below the image */}
      <div className="max-w-4xl w-full px-4 text-center mt-12">
        <p className="text-xl md:text-2xl font-semibold text-gray-700">
          You can get all of this and more.
          <br />
          Just download Swaprs from your App or Android Store.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 py-6">
          <Link href="#">
            <Image
              src="https://static.wixstatic.com/media/539068_3eea24d78905468eb4e345824978acb2~mv2.png/v1/fill/w_221,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png"
              alt="Apple Store"
              width={120}
              height={150}
              className="h-16 w-auto"
            />
          </Link>
          <Link href="#">
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
    </section>
  );
}
