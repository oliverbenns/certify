import * as React from "react";
import * as fs from "fs";
import ReactPDF from "@react-pdf/renderer";
import Certificate from "./certificate";

const dir = "./certificates";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const user: User = {
  firstName: "John",
  lastName: "Doe"
};

const credential: Credential = {
  user,
  title: "Mollit anim id est laborum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
  id: "abc",
  awardedAt: new Date()
};

const certificate = <Certificate credential={credential} />;

ReactPDF.render(certificate, `certificates/${Date.now()}.pdf`);
