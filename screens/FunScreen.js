import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

export default function FunScreen() {
  return (
    <View style={styles.container} >
       <ImageBackground source={require('../assets/images/ace.jpg')} style={styles.backgroundImage}>
        <Text>Map</Text>
        </ImageBackground>
        <ImageBackground source={require('../assets/images/giphy.gif')} style={styles.gif}></ImageBackground>
    </View>
  );
}

FunScreen.navigationOptions = {
  title: 'Fun',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: 500,
    height: 500,
    flexDirection: 'column',
    backgroundColor:'transparent',
    justifyContent: 'flex-start',
  },
  gif: {
    flex: 1,
    width: 450,
    height: 400,
    flexDirection: 'column',
    backgroundColor:'transparent',
    justifyContent: 'flex-start',
    
  }
});
