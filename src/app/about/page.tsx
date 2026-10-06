import type { Metadata } from "next";
import AboutPage from "@/site/about";

export const metadata: Metadata = {
  title: "About eMburc — The Technology + Talent Partner",
};

export default function Page() {
  return <AboutPage />;
}
