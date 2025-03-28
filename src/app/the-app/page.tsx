// src/app/guidelines/page.tsx
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FeatureList from "../components/feature-list";
import AppMain from "../components/app-main";
import CallToAction from "../components/call-to-action";

export default function TheAppPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        {/* <GuidelinesSection /> */}
        <AppMain />
        <FeatureList />
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
}
