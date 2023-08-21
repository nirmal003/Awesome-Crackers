import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 23,
  },
  reportTitle: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

function InvoiceThanks() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>*** Thank You ***</Text>
    </View>
  );
}

export default InvoiceThanks;
