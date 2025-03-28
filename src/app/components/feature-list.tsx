"use client";

import {
  Users,
  MoveRightIcon as SwipeRight,
  Search,
  MessageCircle,
  MessagesSquare,
  Clock,
  Star,
  Coins,
  Layout,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

// Define MotionDiv as a React FC with HTMLMotionProps for a "div"
const MotionDiv = motion.div as any;

export default function FeatureList() {
  const features = [
    {
      id: 1,
      title: "Get matched with compatible offers",
      description:
        "Our app shows you offers you are interested in, based on your categories of interest.",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      id: 2,
      title: "Swipe to find what you need",
      description:
        "Left for no, right for yes. It's that simple. Just like dating apps, but easier to understand!",
      icon: SwipeRight,
      color: "bg-blue-400",
    },
    {
      id: 3,
      title: "Search and filter your results",
      description:
        "Find a swapr based on your settings or let the app decide. Adjust your filters to get more specific results.",
      icon: Search,
      color: "bg-yellow-400",
    },
    {
      id: 4,
      title: "Negotiate better online or in person",
      description:
        "Decide how you prefer to conduct your swapr. You can choose to swapr online or immediately. Connect through direct messages.",
      icon: MessageCircle,
      color: "bg-pink-500",
    },
    {
      id: 5,
      title: "Chat to members within the app",
      description:
        "Message the swapr member, negotiate your terms, and agree on a time to trade.",
      icon: MessagesSquare,
      color: "bg-cyan-500",
    },
    {
      id: 6,
      title: "Follow the status of your swaprs",
      description:
        'See what stage your swapr is at and when your Swaprs exchange is "active" or "completed" or "inactive".',
      icon: Clock,
      color: "bg-pink-500",
    },
    {
      id: 7,
      title: "Make choices based on real ratings",
      description:
        "Find a reputable Swaprs that users are excited to trade with. These are verified ratings from real users who have traded with this member.",
      icon: Star,
      color: "bg-blue-400",
    },
    {
      id: 8,
      title: "Create your Swaprs tokens",
      description:
        "Once you have traded online, you earn points or Swaprs tokens. These credits are used for expenses and unlock privileges or abilities to use the app and website more conveniently.",
      icon: Coins,
      color: "bg-purple-500",
    },
    {
      id: 9,
      title: "Personalize your dashboard and profile",
      description:
        "Add your photo, skills, interests, and preferences to your profile. This way, the app shows best-fit options to you and others find you easier.",
      icon: Layout,
      color: "bg-yellow-400",
    },
    {
      id: 10,
      title: "Check out the rest of the community",
      description:
        "Find out who uses and wants to connect with you. Find the best fit for swaprs.",
      icon: UserCheck,
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="space-y-10">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-start gap-8 group hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div
                className={`flex-shrink-0 p-3 rounded-xl ${feature.color} text-white transition-all duration-300 group-hover:scale-110`}
              >
                <feature.icon className="w-20 h-16" />
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase text-gray-600">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
