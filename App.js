
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Empty from './Empty'
import Contacts from './Contacts'
import Estimate from './Estimate'
import DoB from './DoB'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Empty" component={Empty} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Estimate" component={Estimate} />
          <Stack.Screen name="DoB" component={DoB} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
