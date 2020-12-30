import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

export default function App() {
  return (
    <View style={styles.container}>
     <AppContainer/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator=createBottomTabNavigator({
  Write_Story:{screen:WriteStoryScreen},
  Read_Story:{screen:ReadStoryScreen},
})

const AppContainer = createAppContainer(TabNavigator);