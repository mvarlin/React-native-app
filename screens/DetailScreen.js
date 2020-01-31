import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import MapView from "react-native-maps";

export default class DetailScreen extends React.Component {

    constructor(props){
        super(props);
      
        }

     
    render() {
         const recup = this.props;
         console.log(recup);
         
         const tab = recup.navigation.state.params.velib;
         console.log(tab);

         const name = tab.station_name;
        
         const bikeDispo = tab.nbbike + tab.nbebike;
         const bikeEDispo = tab.nbebike;

         const card = tab.creditcard;
         let cardDisop;
        if (card == 'yes'){
            cardDisop = 'Achat de tickets disponibles';
        }else{
            cardDisop = 'Achat de tickets non disponibles';
        }

        const map = {
          latitude: tab.geo[0],
          longitude: tab.geo[1],
        }
         //const bikeDispo = tab.nbbike;
         console.log(cardDisop);
         console.log(map);

         

        //  const test = JSON.stringify(recup);

        //  console.log(test.navigation.state.params.velib.fields);
        
        //  const stationName = recup.state;
        //   console.log(stationName);
      
    //     const stationState = item.fields.station_state;
    //     console.log('Etat de la station : ' + stationState);
      
    //     const Position = item.fields.geo;
    //     console.log('Position  : ' + Position);

        return (
            <View style={styles.container}>
                <View style={styles.blockA}>
                {/* <ImageBackground source={require('../assets/images/ace.jpg')} style={styles.backgroundImage} > */}
                  <View style={styles.blockB}>
                    <Text style={styles.emojiHome}>🏠</Text>
                    <Text style={styles.title}>{name}</Text>
                  </View>
                {/* </ImageBackground> */}
                </View>

                <View>
                <ImageBackground source={require('../assets/images/télé.png')} style={styles.BackgroundTele} >
                    <MapView style = {styles.map} region={{latitude: map.latitude, longitude: map.longitude, latitudeDelta: 0.009, longitudeDelta: 0.005,}}>
                        <MapView.Marker coordinate={map}/>
                    </MapView>
                  </ImageBackground>
                </View>

                <View style={styles.data}>
                    <Text style={styles.data}> 🚲 {bikeDispo} vélos disponibles</Text>
                    <Text style={styles.data}> 🚲⚡ dont {bikeEDispo} vélos électriques disponibles</Text>
                    <Text style={styles.data}> 💳 {cardDisop}</Text>
                </View>
            </View>
            );
    }   
}

DetailScreen.navigationOptions = {
  title: 'Détails',
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'grey',
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        opacity: 1 ,
       // height: 50,

      },
    data: {
      fontSize: 25,
      backgroundColor: '#8cbfd9'
    },
    map: {
      //flex: 1,
      margin: 34,
      marginTop: 137,
      marginBottom: 50,
      width: 295,
      height: 248,
      flexDirection: 'column',
      backgroundColor:'red',
      justifyContent: 'center',
    },
    emojiHome: {
      fontSize: 50,
      textAlign: 'center',
    },
    image: {
      width: 200, 
      height: 300, 
      resizeMode: 'center', 
    //opacity: .2
    },
    backgroundImage: {
     // flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        //alignItems: "center",
        opacity: .5
    },
    BackgroundTele: {
      // flex: 1,
         width: 420,
         height: 500,
         justifyContent: "center",
         //alignItems: "center",
         //opacity: .5
     },
    blockA: {
      backgroundColor: '#8cbfd9',
      width: 500, 
      height: 100,
      //padding: 1,
      // backgroundColor: 'blue'
    },
    blockB: {
      backgroundColor: '#8cbfd9',
      //flex: 1,
      width: 415, 
      //height: '100%',
      //alignItems: "center",
      //backgroundColor: 'red'

    }
  });