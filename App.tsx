
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Empty from './Empty'
import Contacts from './Contacts'
// import Estimate from './Estimate'
import DoB from './DoB'
import LifeExpectancy from './LifeExpectancy'
import Schedule from './Schedule'
import ScheduleCalendar from './ScheduleCalendar'
import Profile from './Profile'
// import Calendar from './Calendar'
import LifeCalendar from './LifeCalendar'
import LifeCalendarTwo from './LifeCalendarTwo'
import LifeCalendarThree from './LifeCalendarThree'
import LifeCalendarIntro from './LifeCalendarIntro'
import Gender from './Gender'
import { useFonts, Spartan_300Light,  Spartan_100Thin, Spartan_200ExtraLight, Spartan_400Regular, Spartan_500Medium, Spartan_600SemiBold, Spartan_700Bold } from '@expo-google-fonts/spartan';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Spartan_300Light, Spartan_100Thin, Spartan_200ExtraLight, Spartan_400Regular, Spartan_500Medium, Spartan_600SemiBold, Spartan_700Bold
  });


  if (!fontsLoaded) {
    return (
      <AppLoading
      />
    );
  }

  return <StackNavigator/>;
}






const Stack = createNativeStackNavigator();

function StackNavigator() {

  return (
    <NavigationContainer>
        <Stack.Navigator >
          {/* <Stack.Screen name="Hello" component={Hello} /> */}
          {/* <Stack.Screen name="Calendar" component={Calendar} /> */}
          <Stack.Screen options={{ headerShown: false }} name="Empty" component={Empty} />
          <Stack.Screen options={{ headerShown: false }} name="Contacts" component={Contacts} />
          <Stack.Screen options={{ headerShown: false }} name="LifeCalendarIntro" component={LifeCalendarIntro} />
          {/* <Stack.Screen options={{ headerShown: false }} name="Estimate" component={Estimate} /> */}
          <Stack.Screen options={{ headerShown: false }} name="Gender" component={Gender} />
          <Stack.Screen options={{ headerShown: false }} name="DoB" component={DoB} />
          <Stack.Screen options={{ headerShown: false }} name="LifeExpectancy" component={LifeExpectancy} />
          <Stack.Screen options={{ headerShown: false }} name="LifeCalendar" component={LifeCalendar} />
          <Stack.Screen options={{ headerShown: false }} name="LifeCalendarTwo" component={LifeCalendarTwo} />
          <Stack.Screen options={{ headerShown: false }} name="LifeCalendarThree" component={LifeCalendarThree} />
          <Stack.Screen options={{ headerShown: false }} name="Schedule" component={Schedule} />
          <Stack.Screen options={{ headerShown: false }} name="ScheduleCalendar" component={ScheduleCalendar} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


