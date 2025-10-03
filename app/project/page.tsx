import React from "react";
import dynamic from "next/dynamic";

const ProjectClient = dynamic(() => import("./ProjectClient"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

export default function Project() {
  return <ProjectClient />;
}
