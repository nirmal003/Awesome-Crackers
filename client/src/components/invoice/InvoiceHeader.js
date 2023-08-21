import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    flexGrow: 1,
    fontSize: 12.5,
  },
  sno: {
    width: "6%",
    height: 24,
    paddingVertical: 4.8,
    borderRightWidth: 1,
  },
  code: {
    width: "6%",
    paddingVertical: 4.8,
    borderRightWidth: 1,
    height: 24,
  },
  description: {
    width: "38%",
    height: 24,
    paddingVertical: 4.8,
    borderRightWidth: 1,
  },
  type: {
    height: 24,
    width: "8%",
    paddingVertical: 4.8,
    borderRightWidth: 1,
  },
  qty: {
    width: "12%",
    height: 24,
    paddingVertical: 4.8,
    borderRightWidth: 1,
  },
  rate: {
    width: "12%",
    height: 24,
    paddingVertical: 4.8,
    borderRightWidth: 1,
  },
  amount: {
    height: 24,
    paddingVertical: 4.8,
    width: "18%",
  },
});

function InvoiceHeader() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sno}>S.No</Text>
        <Text style={styles.code}>Code</Text>
        <Text style={styles.description}>Product Name</Text>
        <Text style={styles.type}>Type</Text>
        <Text style={styles.qty}>Quantity</Text>
        <Text style={styles.rate}>Rate (Rs)</Text>
        <Text style={styles.amount}>Amount (Rs)</Text>
      </View>
    </>
  );
}

export default InvoiceHeader;
