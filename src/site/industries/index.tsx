"use client";

import { createDCPage } from "@/lib/dc";
import Logic, { defaults } from "./logic";
import template from "./template";

const IndustriesPage = createDCPage(Logic, template, defaults);
export default IndustriesPage;
