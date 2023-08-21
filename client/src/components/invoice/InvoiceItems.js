import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    fontSize: 11,
    flexGrow: 1,
  },
  sno: {
    height: 22,
    width: "6%",
    textAlign: "center",
    borderRightWidth: 1,
    paddingVertical: 4.9,
  },
  code: {
    height: 22,
    width: "6%",
    textAlign: "center",
    borderRightWidth: 1,
    paddingVertical: 4.9,
  },
  description: {
    height: 22,
    width: "38%",
    textAlign: "start",
    borderRightWidth: 1,
    paddingVertical: 4.9,
    paddingLeft: 4,
  },
  type: {
    height: 22,
    width: "8%",
    borderRightWidth: 1,
    textAlign: "center",
    textTransform: "lowercase",
    paddingVertical: 4.9,
  },
  qty: {
    width: "12%",
    height: 22,
    borderRightWidth: 1,
    textAlign: "center",
    paddingVertical: 4.9,
  },
  rate: {
    height: 22,
    width: "12%",
    borderRightWidth: 1,
    textAlign: "right",
    paddingVertical: 4.9,
    paddingRight: 8,
  },
  amount: {
    height: 22,
    width: "18%",
    textAlign: "right",
    paddingRight: 8,
    paddingVertical: 4.9,
  },
});

function InvoiceItems({ item }) {
  // console.log(item);

  return (
    <>
      {item?.length > 0 &&
        item?.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.sno}>{index + 1}</Text>
            <Text style={styles.code}>{item.id}</Text>
            <Text style={styles.description}>
              {item.product.u.Product_Name}
            </Text>
            <Text style={styles.type}>{item.product.u.Material_Type}</Text>
            <Text style={styles.qty}>{item.qty}</Text>
            <Text style={styles.rate}>{item.product.u.Product_Price}</Text>
            <Text style={styles.amount}>
              {Math.round(item.qty * item.product.u.Product_Price)}
            </Text>
          </View>
        ))}
    </>
  );
}

export default InvoiceItems;
