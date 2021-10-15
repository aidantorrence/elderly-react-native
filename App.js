
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Empty from './Empty'
import Contacts from './Contacts'
import Estimate from './Estimate'
import DoB from './DoB'
import LifeExpectancy from './LifeExpectancy'
import Schedule from './Schedule'
import ScheduleCalendar from './ScheduleCalendar'
import Profile from './Profile'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Empty" component={Empty} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Estimate" component={Estimate} />
          <Stack.Screen name="DoB" component={DoB} />
          <Stack.Screen name="LifeExpectancy" component={LifeExpectancy} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="ScheduleCalendar" component={ScheduleCalendar} />
          <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
