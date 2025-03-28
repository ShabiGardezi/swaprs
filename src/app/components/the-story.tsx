import Image from "next/image";
import Link from "next/link";

export default function TheStory() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-cyan-500 px-3 py-1 text-sm font-semibold text-white">
            THE STORY
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <p className="text-gray-500">
                "I was tired of seeing so much unused potential in people's
                skills. I created Barterchain to help people leverage their
                talents and connect with others."
              </p>
              <p className="font-medium">- Founder & CEO, Barterchain</p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 w-fit items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90"
            >
              Learn more
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-full border-4 border-white shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Founder"
                width={300}
                height={300}
                className="aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
