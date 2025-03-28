import Image from "next/image";

export default function AppShowcase() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="Swaprs App"
              width={300}
              height={600}
              className="rounded-lg border shadow-sm"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-purple-500 px-3 py-1 text-sm font-semibold text-white">
              TRY OUR NEW PLATFORM
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Connect with your community
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Our platform makes it easy to find people with complementary
              skills. Trade your expertise for services you need without
              spending money.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Easy to use interface</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Secure messaging system</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Verified user profiles</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Rating and review system</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
