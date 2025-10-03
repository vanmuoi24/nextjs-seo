import React from "react";
import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

export default function Contact() {
  return <ContactClient />;
}
