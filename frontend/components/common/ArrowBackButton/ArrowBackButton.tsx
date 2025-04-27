"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const ArrowBackButton = () => {
  const router = useRouter();

  return <ArrowLeft className="text-icon-gray" onClick={router.back} />;
};
