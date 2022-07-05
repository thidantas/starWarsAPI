import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import api from './src/services/api';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('films');
      console.log(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <Text>FILMES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
