import type { Metadata } from "next";
import HomePage from "@/site/home";

export const metadata: Metadata = {
  title: "Emburc Technologies — Technology + Talent Partner",
};

export default function Page() {
  return <HomePage />;
}
