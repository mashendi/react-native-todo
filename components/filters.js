import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Filters({ filter, setFilter }) {
  return (
    <View style={styles.filters}>
      <TouchableOpacity onPress={() => setFilter("all")}>
        <Text
          style={
            filter === "all" ? [styles.filter, styles.active] : styles.filter
          }
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter("active")}>
        <Text
          style={
            filter === "active" ? [styles.filter, styles.active] : styles.filter
          }
        >
          Active
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter("done")}>
        <Text
          style={
            filter === "done" ? [styles.filter, styles.active] : styles.filter
          }
        >
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  filter: {
    paddingHorizontal: 35,
    paddingVertical: 17,
    color: "#000",
    backgroundColor: "#FFF",
    borderRadius: 27,
    marginHorizontal: 2,
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "red",
    color: "white"
  },
});
