import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import EditIcon from "react-native-vector-icons/AntDesign";
import DeleteIcon from "react-native-vector-icons/MaterialIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TodoList = ({ items, setItems }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );

  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedText(items[index]);
    setModalVisible(true);
  };

  const handleSave = () => {
    const updatedTodos = [...items];
    updatedTodos[editIndex] = editedText;
    setItems(updatedTodos);
    setModalVisible(false);
  };

  const handleDelete = (index) => {
    // Handle delete logic here
    const updatedTodos = items.filter((_, i) => i !== index);
    setItems(updatedTodos);
  };
  const handleCheckboxToggle = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };
  return (
    <ScrollView className="w-screen  h-[100%] flex gap-y-3	">
      {items.map((item, index) => (
        <View
          key={index}
          className="px-4 py-4 mx-5 flex flex-row items-center justify-between rounded-sm"
        >
          <View className="flex flex-row items-center">
            <BouncyCheckbox
              onPress={() => handleCheckboxToggle(index)}
              isChecked={checkedItems[index]}
            />
            <Text
              className={`text-[16px] ${
                checkedItems[index] ? "line-through" : ""
              }`}
            >
              {item}
            </Text>
          </View>
          <View className="flex flex-row gap-6">
            <EditIcon name="edit" size={20} onPress={() => handleEdit(index)} />
            <DeleteIcon
              name="delete"
              size={20}
              onPress={() => handleDelete(index)}
            />
          </View>
        </View>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex justify-center items-center border h-full">
          <View className="bg-[#ffffff] rounded-sm shadow-lg border p-16 flex gap-y-8 w-[80%]">
            <TextInput
              value={editedText}
              onChangeText={(text) => setEditedText(text)}
              className="border-b-2"
            />
            <View className="flex flex-row justify-between gap-x-2">
              <Button title="Save" onPress={handleSave} />
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default TodoList;
