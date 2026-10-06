import type { Metadata } from "next";
import CaseStudiesPage from "@/site/case-studies";

export const metadata: Metadata = {
  title: "Case Studies: Real Builds. Real Results. — eMburc",
};

export default function Page() {
  return <CaseStudiesPage />;
}
