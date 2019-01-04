import * as React from "react";
import * as fs from "fs";
import ReactPDF from "@react-pdf/renderer";
import Certificate from "./certificate";

const dir = "./certificates";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

ReactPDF.render(<Certificate />, `certificates/${Date.now()}.pdf`);
