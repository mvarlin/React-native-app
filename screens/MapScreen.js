import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends Component {
  state = {
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
  },
  errorMessage: null
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location: location.coords });
  };

  render() {
let position = this.state.location;
let text = "";
let latitude;
let longitude;

    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (position) {
      latitude = position.latitude;
      longitude = position.longitude;
    }

    return (

      <View>
        <View>
          <Text style = {styles.title}>Localistaion </Text>
        </View>

        <View>
          <MapView style = {styles.map} provider={PROVIDER_GOOGLE} region={{latitude: latitude, longitude: longitude, latitudeDelta: 0.009, longitudeDelta: 0.009,}}>
                            {<MapView.Marker coordinate={position}/>}
            <View style={styles.container} style={{position: "absolute", top: 100, left: 50}}>
              <Text>{text}</Text>
            </View>
          </MapView>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  title: {
    //marginTop: ,
    fontSize: 18,
    textAlign: 'center',
    opacity: 1 ,
   // height: 50,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    //flex: 1,
    // margin: 34,
     marginTop: 60,
    // marginBottom: 50,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor:'red',
    justifyContent: 'center',
  },
});