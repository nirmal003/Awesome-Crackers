import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import * as helpers from "../../Helper/helper";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderColor: "#000",
    borderBottomWidth: 1,
    fontSize: 12.5,
    fontWeight: "bold",
  },
  description: {
    width: "82%",
    textAlign: "right",
    borderRightColor: "#000",
    borderRightWidth: 1,
    paddingRight: 8,
    paddingVertical: 4,
    height: 24,
  },
  total: {
    width: "18%",
    textAlign: "right",
    height: 24,
    paddingRight: 8,
    paddingVertical: 4,
  },
});

function InvoiceFooter({ item }) {
  // console.log(item);

  const netTotal = item.length && helpers.netTotal(item);
  const totalDiscount = item.length && helpers.overallDiscount(item);
  const totalPrice = item.length && helpers.overallPrice(item);
  const packingCharge = (totalPrice * 0.03).toFixed(2);
  const overallTotal = Math.round(totalPrice) + Math.round(packingCharge);

  return (
    <>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Net Total</Text>
        <Text style={styles.total}>{Math.round(netTotal).toFixed(2)}</Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>
          Discount(
          {Math.round((Math.round(totalDiscount) / Math.round(netTotal)) * 100)}
          %)
        </Text>
        <Text style={styles.total}>{Math.round(totalDiscount).toFixed(2)}</Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Sub Total</Text>
        <Text style={styles.total}>{Math.round(totalPrice).toFixed(2)}</Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Packing Charges(3%)</Text>
        <Text style={styles.total}>{packingCharge}</Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Overall Total</Text>
        <Text style={styles.total}>{overallTotal.toFixed(2)}</Text>
      </View>
    </>
  );
}

export default InvoiceFooter;
