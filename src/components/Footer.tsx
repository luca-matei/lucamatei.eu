import {getCurrentYear} from "@/utils";
import React from "react";

export default function Footer() {
  return (
    <p className="text-sm text-center leading-5 text-gray-500 py-12 print:hidden">
      &copy; 2017-{getCurrentYear()} Luca Matei. All rights reserved.
    </p>
  );
}
