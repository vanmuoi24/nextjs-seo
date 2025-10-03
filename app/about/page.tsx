import React from "react";
import dynamic from "next/dynamic";

const AboutClient = dynamic(() => import("./AboutClient"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

export default function About() {
  return <AboutClient />;
}
