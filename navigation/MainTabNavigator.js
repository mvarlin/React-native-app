import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import ColorScreen from '../screens/ColorScreen';
import FunScreen from '../screens/FunScreen';
import DetailScreen from '../screens/DetailScreen';

const ListStack = createStackNavigator(
  {
    Home: ListScreen,
    Detail: DetailScreen
  }
);

ListStack.navigationOptions = {
  tabBarLabel: '📜',
};

const MapStack = createStackNavigator(
  {
    Links: MapScreen,
  }
);

MapStack.navigationOptions = {
  tabBarLabel: '🗺️',
};


const ColorStack = createStackNavigator(
  {
    Links: ColorScreen,
  }
);

ColorStack.navigationOptions = {
  tabBarLabel: '🎨',
};

const FunStack = createStackNavigator(
  {
    Links: FunScreen,
  }
);

FunStack.navigationOptions = {
  tabBarLabel: '🕹️ ',
};

export default createBottomTabNavigator({
  ListStack,
  MapStack,
  ColorStack,
  FunStack
});