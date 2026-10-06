import type { Metadata } from "next";
import TermsOfUsePage from "@/site/terms-of-use";

export const metadata: Metadata = {
  title: "Terms of Use — eMburc",
};

export default function Page() {
  return <TermsOfUsePage />;
}
