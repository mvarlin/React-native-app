import React from 'react';
import { Title, AsyncStorage, FlatList, ActivityIndicator, StyleSheet, Text, View, Animated, LayoutAnimation, NativeModules, TouchableOpacity, Button } from 'react-native';
import { render } from 'react-dom';
import styled from 'styled-components'

 const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


export default class ListScreen extends React.Component {

constructor(props){
super(props);
this.state ={ isLoading: true};
this.handleClick = this.handleClick.bind(this);
}

handleClick(item) {

  
  const stationName = item.fields.station_name;
  console.log('Nom : ' + stationName);

  const stationState = item.fields.station_state;
  console.log('Etat de la station : ' + stationState);

  const Position = item.fields.geo;
  console.log('Position  : ' + Position);
  
  console.log(' ');
  console.log(' ');
 
}


componentDidMount(){
return fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel')
  .then((response) => response.json())
  .then((responseJson) => {

    this.setState({
      isLoading: false,
      dataSource: responseJson.records,
      dataS: responseJson,
    }, function(){});
    const velib = JSON.stringify(responseJson);
    AsyncStorage.setItem('velibTab', velib);
    AsyncStorage.getItem('velibTab ', (err, result) =>{
      // console.log(JSON.parse(result)); 
      // console.log(err);
    });
  })
  .catch((error) =>{
    // console.error(error);
    // console.log(error);
  });
}


listDetail = (velib) => {
  this.props.navigation.navigate('Detail', {velib: velib.fields});
  // console.log(velib);
  
}
render() {

if(this.state.isLoading){
  return(
    <View style={{flex: 1, padding: 20}}>
      <ActivityIndicator/>
    </View>
  )
}

return (
 
<View style={styles.container}>
      <FlatList
        style={styles.list}
        data={this.state.dataSource}
        //renderItem={({item}) => <Text>{item.station_state}, {item.station_name}</Text>}
        renderItem={({item}) => 
          <Item style={Item.item}> 
        <TouchableOpacity onPress={/*()=>this.handleClick(item),*/ ()=>this.listDetail(item)}>
          <Text
            style={styles.itemOfList} 
            > {item.fields.station_name} - {item.fields.station_code}
          </Text>
          </TouchableOpacity>
          {/* <Title >Item number 2</Title> */}
          </Item>
          }
        keyExtractor={({id}, index) => id}
      />

       
</View>
);
}
}

ListScreen.navigationOptions = {
  title: "List 📜",
  headerStyle: {
    backgroundColor: "black",
    fontSize: 20
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  list: {
    flex: 1,
    padding: 0,
    backgroundColor: '#A9A9A9',
    fontSize: 20,
  },
  itemOfList: {
    color: '#1E90FF',
    flex: 1,
    padding: 15,
    backgroundColor: '#000001',
    fontSize: 20,
    borderRadius: 2,
    marginBottom: 1,
    marginLeft: 0,
    overflow: 'scroll',
    textAlign:'center',
    
    
    
  },
}
);

const Item = styled.View({
  item: {
flex:1,
border:1,
margin:2 ,
borderRadius:10,
// BoxShadow:0 0 10px #ccc;
width:80,
padding:10,
backgroundColor:'#fff'
}
});
