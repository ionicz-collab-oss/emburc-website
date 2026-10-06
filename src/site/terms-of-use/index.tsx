"use client";

import { createDCPage } from "@/lib/dc";
import Logic, { defaults } from "./logic";
import template from "./template";

const TermsOfUsePage = createDCPage(Logic, template, defaults);
export default TermsOfUsePage;
