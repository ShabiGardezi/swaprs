import Image from "next/image";

export default function Community() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Graphic Designer",
      content:
        "I've been able to exchange my design services for yoga classes. It's amazing!",
      avatar: "/images/kirsten.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Web Developer",
      content:
        "Barterchain helped me find a tutor for my son while I offered coding lessons in return.",
      avatar: "/images/micheal.webp",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Photographer",
      content:
        "I traded photography sessions for home repairs. This platform is revolutionary!",
      avatar: "/images/emmas.jpeg",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Language Teacher",
      content:
        "Teaching Spanish while learning piano has been a wonderful experience through Barterchain.",
      avatar: "/images/kirsten.jpg",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Personal Trainer",
      content: "I offer fitness training and receive accounting help. Win-win!",
      avatar: "/images/hollis_jillian_hs18_470x486.jpg",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Handyman",
      content:
        "My repair skills have been exchanged for cooking lessons. I'm eating better than ever!",
      avatar: "/images/james.webp",
    },
    {
      id: 7,
      name: "Olivia Martinez",
      role: "Marketing Specialist",
      content:
        "I've helped small businesses with marketing while receiving childcare in return.",
      avatar: "/images/olivia.jpg",
    },
    {
      id: 8,
      name: "Robert Taylor",
      role: "Music Teacher",
      content:
        "Teaching guitar while getting help with my website has been fantastic.",
      avatar: "/images/robert.jpeg",
    },
  ];

  return (
    <section id="community" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm font-semibold text-white">
            HEAR FROM OUR COMMUNITY
          </div>
        </div>
        <div className="mx-auto max-w-8xl py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                // className="flex flex-col space-y-4 rounded-lg border bg-white p-4 shadow-sm transition-transform transform hover:-translate-y-2 hover:shadow-md"
                className="flex flex-col space-y-4 rounded-lg border bg-white p-4 shadow-sm transition-transform transform hover:-translate-y-1 hover:translate-x-1 hover:rotate-1 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center space-x-3 space-y-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
