
import { StyleSheet, Text, View,Button,FlatList,Image,TouchableOpacity, ScrollView} from "react-native";
import React,{useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Router,Stack,Scene} from 'react-native-router-flux'
import Register  from "./components/RegForm";
import Login from "./components/Login";
//import Dashboard from "./components/Dashboard";
////import Moving from "./components/Moving";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> s</Text>
      <StatusBar style="auto" />
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
