import React from 'react';
import { Platform, StatusBar, StyleSheet, View, } from 'react-native';
import { Home } from './src/components/screen';
import { Nav } from './src/components/shared';
import { COLORS } from './src/assets/colors';

const App = () => {

  return (
    <View style={styles.body}>

      <Nav />
      <Home />

      <StatusBar backgroundColor={Platform.OS === 'ios' ? COLORS.black : COLORS.white} barStyle={Platform.OS === 'ios' ? "light-content" : 'dark-content'} />

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
