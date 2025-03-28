import Image from "next/image";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "EMILY RODRIGUEZ",
      role: "CEO",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "MICHAEL THOMPSON",
      role: "CTO",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "TEAM PHOTO",
      role: "",
      avatar: "/placeholder.svg?height=120&width=180",
      isWide: true,
    },
    {
      id: 4,
      name: "SOPHIA BENNETT",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "DANIEL RODRIGUEZ",
      role: "Project Manager",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 6,
      name: "LORENZO BERNARDINO",
      role: "Lead Designer",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 7,
      name: "LAURA ROSALES SMITH",
      role: "Head of Product",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 8,
      name: "ALESSANDRO SMITH",
      role: "Lead Developer",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 9,
      name: "LEONARDO BURTON",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ];

  return (
    <section id="team" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-white">
            MEET THE TEAM
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.id}
                className={`flex flex-col items-center space-y-2 ${
                  member.isWide ? "col-span-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={member.isWide ? 180 : 120}
                    height={120}
                    className={member.isWide ? "rounded-lg" : "rounded-full"}
                  />
                </div>
                <h3 className="text-sm font-bold">{member.name}</h3>
                {member.role && (
                  <p className="text-xs text-gray-500">{member.role}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
