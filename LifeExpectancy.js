import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { expectancies } from './utils/conversion'

function LifeExpectancy ({ navigation, route }) {
    const [age,setAge] = useState(route.params)

    function handlePress(item) {
        navigation.navigate('Schedule')
      }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.main}>
                <Image style={{width: 150, height: 150, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.midText} >The calculated average life expectancy of a {age} year old woman is currently...</Text>
              <Text style={styles.midText2}>{expectancies[age].f} years</Text>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={[styles.button]} onPress={handlePress}>
                <Text style={styles.buttonText} >Discard</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={[styles.button]} onPress={handlePress}>
                <Text style={styles.buttonText} >Add to Profile</Text>
              </TouchableOpacity>  
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
    },
  mainText: {
      margin: 20,
      fontSize: 20,
      color: '#105F64',
    },
  body: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
  },
  midText: {
      margin: 25,
      fontSize: 33,
      color: '#105F64',
    },
  midText2: {
      margin: 20,
      fontSize: 33,
      color: '#FAAA7D',
    },
  button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 40,
      width: 150,
      margin: 40,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: '#56B1B1',        
  },
  buttonText: {
      fontSize: 20,
      color: 'white',
  },
  bottom: {
      display: 'flex',
      flexDirection: 'row',
  },
});