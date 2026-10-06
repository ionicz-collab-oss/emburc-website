import type { Metadata } from "next";
import PrivacyPolicyPage from "@/site/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy — eMburc",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
