import React from "react";
import dynamic from "next/dynamic";

const DienDanDungClient = dynamic(() => import("./DienDanDungClient"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

export default function DienDanDung() {
  return <DienDanDungClient />;
}
