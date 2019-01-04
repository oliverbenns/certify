import * as React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

interface CertificateProps {
  credential: Credential;
}

const Certificate: React.SFC<CertificateProps> = props => (
  <Document>
    <Page orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <Text>
          {props.credential.user.firstName} {props.credential.user.lastName}
        </Text>
      </View>
    </Page>
  </Document>
);

export default Certificate;
