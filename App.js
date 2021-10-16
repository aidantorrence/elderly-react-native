
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
import Calendar from './Calendar'
// import Hello from './Hello'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator >
          {/* <Stack.Screen name="Hello" component={Hello} /> */}
          {/* <Stack.Screen name="Calendar" component={Calendar} /> */}
          <Stack.Screen options={{ headerShown: false }} name="Empty" component={Empty} />
          <Stack.Screen options={{ headerShown: false }} name="Contacts" component={Contacts} />
          <Stack.Screen options={{ headerShown: false }} name="Estimate" component={Estimate} />
          <Stack.Screen options={{ headerShown: false }} name="DoB" component={DoB} />
          <Stack.Screen options={{ headerShown: false }} name="LifeExpectancy" component={LifeExpectancy} />
          <Stack.Screen options={{ headerShown: false }} name="Schedule" component={Schedule} />
          <Stack.Screen options={{ headerShown: false }} name="ScheduleCalendar" component={ScheduleCalendar} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
