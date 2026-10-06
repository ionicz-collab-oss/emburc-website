"use client";

import { createDCPage } from "@/lib/dc";
import Logic, { defaults } from "./logic";
import template from "./template";

const PrivacyPolicyPage = createDCPage(Logic, template, defaults);
export default PrivacyPolicyPage;
