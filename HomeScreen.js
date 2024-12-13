import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch('http://localhost:5000/forms');
        const data = await response.json();
        setForms(data);
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchForms();
  }, []);

  return (
    <View>
      <Text>Saved Forms</Text>
      <FlatList
        data={forms}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default HomeScreen;
