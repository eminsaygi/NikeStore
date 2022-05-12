import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
