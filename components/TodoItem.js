import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text={item.todo}
        iconStyle={{ borderColor: "red" }}
        style={styles.listItem}
        isChecked={item.status === "done" ? true : false}
        onPress={() => pressHandler(item.key)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 14,
  },
});
