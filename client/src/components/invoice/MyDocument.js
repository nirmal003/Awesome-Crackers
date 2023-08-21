import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceItems from "./InvoiceItems";
import InvoiceThanks from "./InvoiceThanks";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 6,
  },

  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#000",
  },
});

function MyDocument({ dt, item, user }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceDetails dt={dt} user={user} />
        <View style={styles.tableContainer}>
          <InvoiceHeader />
          <InvoiceItems item={item} />
          <InvoiceFooter item={item} />
        </View>
        <InvoiceThanks />
      </Page>
    </Document>
  );
}

export default MyDocument;
