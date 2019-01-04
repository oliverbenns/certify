import * as React from "react";
import { Document } from "@react-pdf/renderer";
import { Page, Container, Heading, Description, Image } from "./components";

const Certificate: React.SFC<Credential> = props => (
  <Document>
    <Page orientation="landscape">
      <Container>
        <Heading>
          {props.user.firstName} {props.user.lastName}
        </Heading>
        <Description>{props.description}</Description>
      </Container>
    </Page>
  </Document>
);

export default Certificate;
