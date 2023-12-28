import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";

import TodoList from "./src/components/TodoList";
import TodoScreen from "./src/screens/TodoScreen";

const App = () => {
  return (
    <View className="flex mt-10 h-screen">
      <TodoScreen />
    </View>
  );
};

export default App;
