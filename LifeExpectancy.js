import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { expectancies } from './utils/conversion'

import { LinearGradient } from 'expo-linear-gradient';

function LifeExpectancy ({ navigation, route }) {
    const {age, gender} = route.params

    function handlePress(item) {
        navigation.navigate('LifeCalendar',expectancies[age][gender === 'woman' ? 'f': 'm']-age)
      }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.main}>
                <Image style={{width: 105, height: 105, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.midText} >Statistically, the average {age} year old {gender} lives to...</Text>
              <Text style={styles.midText2}>{expectancies[age].f} years</Text>
            </View>
            <View style={styles.bottom}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#318A8F', '#54AFAF', '#5BB6B5' ]} 
              locations={[ 0, 0.7, 1]}
              style={[styles.button]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
                <TouchableOpacity onPress={handlePress}>
                  <Text style={styles.buttonText} >Next</Text>
                </TouchableOpacity>  
            </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default LifeExpectancy


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    marginTop: 85,
  },
  mainText: {
    margin: 20,
    fontSize: 20,
    color: '#105F64',
    fontFamily: 'Spartan_600SemiBold',
    letterSpacing: -.5,
  },
  body: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
  },
  midText: {
    margin: 20,
    fontSize: 27,
    lineHeight: 38,
    color: '#105F64',
    fontFamily: 'Spartan_400Regular',
    letterSpacing: -1.25,
  },
  midText2: {
      margin: 20,
      fontSize: 33,
      color: '#FAAA7D',
      fontFamily: 'Spartan_400Regular',
      letterSpacing: -1.25,
    },
  button: {
      padding: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      borderRadius: 27,
      margin: 40,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: '#56B1B1',        
  },
  buttonText: {
      fontSize: 20,
      color: 'white',
      fontFamily: 'Spartan_500Medium',
      letterSpacing: -.41,
  },
  bottom: {
      display: 'flex',
      flexDirection: 'row',
  },
});