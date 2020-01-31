
import React from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, StyleSheet, Text, View, Animated, LayoutAnimation, NativeModules, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { render } from 'react-dom';

 const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

  export default class ColorScreen extends React.Component {

    stateLeft = {
    w: 210,
    h: 200,
  };

  stateRight = {
    w: 210,
    h: 200,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.stateLeft.w = 650, h: this.stateLeft.h = 800})
  }

  _onPressA = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.stateRight.w = 650, h: this.stateRight.h = 800})
  }

  // _onPressBack = () => {
  //   // Animate the update
  //   LayoutAnimation.spring();
  //   this.setState({w: this.state.w = 300, h: this.state.h = 800})
  // }

constructor(props){
  super(props);
  this.state ={ isLoading: true}
}


render() {
  return (
   
<View style={{flex: 1, flexDirection: 'row', alignSelf: 'center', alignContent: 'center'}}>
    <View style={[styles.leftbox , {width: this.stateLeft.w, height: this.stateLeft.h}]}>
        <View style={styles.button}>
            <Button style={styles.buttonText} title="Red" onPress={this._onPress}/>
        </View>
    </View>

    <View style={[styles.rightbox , {width: this.stateRight.w, height: this.stateRight.h}]}>
        <View style={styles.button}>
            <Button style={styles.buttonText} title="Blue" onPress={this._onPressA}   type="outline"/>
            <Button icon={<Icon name="arrow-right" size={15} color="white" />} iconRight title="Button with right icon"/>
        </View>
    </View>
</View> 

  );
}
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   leftbox: {
    width: 20, 
    height: 80, 
    backgroundColor: 'red'
   },
   rightbox: {
    width: 20, 
    height: 80, 
    backgroundColor: 'blue'
   },
   button: {
    //backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: 'black'
  },
   buttonText: {
    //position: 'absolute',
    color: '#fff',
    marginTop: 50,
    fontWeight: 'bold',
  },
 });


 ColorScreen.navigationOptions = {
    title: "Colors",
  };