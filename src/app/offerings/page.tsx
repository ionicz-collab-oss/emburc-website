import type { Metadata } from "next";
import OfferingsPage from "@/site/offerings";

export const metadata: Metadata = {
  title: "Software Development & AI Services — eMburc Offerings",
};

export default function Page() {
  return <OfferingsPage />;
}
