import CallToAction from "./components/call-to-action";
import AppShowcase from "./components/appshowcase";
import TheStory from "./components/the-story";
import Community from "./components/community";
import WhatIs from "./components/what-is";
import KeyFeatures from "./components/key-features";
import HowItWorks from "./components/how-it-works";
import Hero from "./components/hero";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <WhatIs />
      <Community />
      <TheStory />
      <AppShowcase />
      <CallToAction />
      <Footer />
    </main>
  );
}
