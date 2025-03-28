"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define MotionDiv as a React FC with HTMLMotionProps for a "div"
const MotionDiv = motion.div as any;

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* TEXT CONTENT */}
          <MotionDiv
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }} // triggers once, when 40% in view
            className="space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Trading talents.
                <br />
                Swapping skills.
                <br />
                <span className="text-blue-500">Connecting</span>
                <br />
                <span className="text-blue-500">communities.</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Download our app and start trading your skills with others in
                your community.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
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
          </MotionDiv>

          {/* IMAGE */}
          <MotionDiv
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-start items-center flex-wrap"
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://static.wixstatic.com/media/539068_06a0a82efc274676bf7eaf151a544032~mv2.png/v1/fill/w_798,h_837,al_c,q_90,enc_avif,quality_auto/Group-min.png"
                alt="Swaprs showcase"
                width={600}
                height={500}
                className="aspect-[3/4] object-cover"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
