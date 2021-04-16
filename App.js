import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";

// You can import from local files
import Header from "./components/header";
import TodoInput from "./components/TodoInput";
import Filters from "./components/filters";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      prevTodos.map((todo) => {
        if (todo.key === key) {
          if (todo.status === "active") {
            todo.status = "done";
          } else {
            todo.status = "active";
          }
        }
      });
      return [...prevTodos];
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          key:
            prevTodos.length === 0
              ? (1).toString()
              : (prevTodos[prevTodos.length - 1].key + 1).toString(),
          todo: text,
          status: "active",
        },
      ];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <TodoInput submitHandler={submitHandler} />
      <Filters filter={filter} setFilter={setFilter} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            if (filter === "all") {
              return <TodoItem item={item} pressHandler={pressHandler} />;
            }
            if (filter === "active") {
              return item.status === "active" ? (
                <TodoItem item={item} pressHandler={pressHandler} />
              ) : null;
            }
            if (filter === "done") {
              return item.status === "done" ? (
                <TodoItem item={item} pressHandler={pressHandler} />
              ) : null;
            }
          }}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#232323",
    padding: 8,
  },
  list: {
    margin: 38,
  },
});
