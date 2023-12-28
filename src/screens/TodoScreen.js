import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import TodoList from "../components/TodoList";

const TodoScreen = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputText.trim() !== "") {
      setItems([...items, inputText]);
      setInputText("");
    }
  };

  return (
    <View className="">
      <Text className="text-center text-[35px] font-semibold text-[#827f7a] italic">
        Todo List
      </Text>
      <View className="flex mt-5 flex-row">
        <TextInput
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          className="border-[1px] mx-7 p-2 w-[220px]"
          placeholder="Add your todo"
        />
        <TouchableOpacity
          onPress={handleAdd}
          className="px-10 py-2 bg-[#3498db] justify-center"
        >
          <Text className="text-center text-[16px] text-[#ffffff]">Add</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-[50px] h-[650px]">
        <TodoList items={items} setItems={setItems} />
      </View>
    </View>
  );
};

export default TodoScreen;
