import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="how" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-yellow-300 px-3 py-1 text-sm font-semibold">
            HOW DOES IT WORK?
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Choose what you want"
                width={200}
                height={400}
                className="rounded-lg border shadow-sm"
              />
            </div>
            <h3 className="text-lg font-bold">Choose what you want</h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Share your skills"
                width={200}
                height={400}
                className="rounded-lg border shadow-sm"
              />
            </div>
            <h3 className="text-lg font-bold">Share your skills</h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Find the right match"
                width={200}
                height={400}
                className="rounded-lg border shadow-sm"
              />
            </div>
            <h3 className="text-lg font-bold">Find the right match</h3>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Let the Swapr begin"
                width={200}
                height={400}
                className="rounded-lg border shadow-sm"
              />
            </div>
            <h3 className="text-lg font-bold">Let the Swapr begin!</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
