import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import QuestionItem from '../components/QuestionItem';

const CreateFormScreen = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { text: '', type: 'text', options: [] }]);
  };

  const saveForm = async () => {
    try {
      const response = await fetch('http://localhost:5000/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, questions }),
      });
      const data = await response.json();
      console.log('Form saved:', data);
    } catch (error) {
      console.error('Error saving form:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Form Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <FlatList
        data={questions}
        renderItem={({ item, index }) => (
          <QuestionItem
            question={item}
            updateQuestion={(updated) =>
              setQuestions(questions.map((q, i) => (i === index ? updated : q)))
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Add Question" onPress={addQuestion} />
      <Button title="Save Form" onPress={saveForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default CreateFormScreen;