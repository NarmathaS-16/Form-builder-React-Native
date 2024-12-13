import React from 'react';
import { View, TextInput, Picker, Button, StyleSheet } from 'react-native';

const QuestionItem = ({ question, updateQuestion }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Question text"
        value={question.text}
        onChangeText={(text) => updateQuestion({ ...question, text })}
        style={styles.input}
      />
      <Picker
        selectedValue={question.type}
        onValueChange={(type) => updateQuestion({ ...question, type })}
        style={styles.picker}
      >
        <Picker.Item label="Text" value="text" />
        <Picker.Item label="Multiple Choice" value="radio" />
        <Picker.Item label="Checkbox" value="checkbox" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  picker: { height: 50, width: 200 },
});

export default QuestionItem;
