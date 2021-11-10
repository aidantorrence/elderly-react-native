import React, { useState } from 'react'
import { SafeAreaView, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

function Schedule ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('ScheduleCalendar')
      }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.main}>
              <Image style={{width: 105, height: 105, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
              <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.midText} >Let's schedule a time to connect with your loved one.</Text>
            </View>
            <View style={styles.bottom}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#318A8F', '#54AFAF', '#5BB6B5' ]} 
              locations={[ 0, 0.7, 1]}
              style={styles.button}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
              <TouchableOpacity onPress={handlePress}>
                <Text style={styles.buttonText} >Not right now</Text>
              </TouchableOpacity>  
            </LinearGradient>
            <LinearGradient
              // Background Linear Gradient
              colors={['#318A8F', '#54AFAF', '#5BB6B5' ]} 
              locations={[ 0, 0.7, 1]}
              style={styles.button}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
              <TouchableOpacity onPress={handlePress}>
                <Text style={styles.buttonText} >Schedule</Text>
              </TouchableOpacity>  
            </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default Schedule


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
    letterSpacing: -1,
  },
  midText2: {
      margin: 20,
      fontSize: 33,
      color: '#FAAA7D',
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 27,
      margin: 40,
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