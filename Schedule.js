import React, { useState } from 'react'
import { SafeAreaView, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Schedule ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('ScheduleCalendar')
      }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.main}>
                <Image style={{width: 150, height: 150, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.midText} >Let's schedule a time to connect with your loved one.</Text>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={[styles.button]} onPress={handlePress}>
                <Text style={styles.buttonText} >Not right now</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={[styles.button]} onPress={handlePress}>
                <Text style={styles.buttonText} >Schedule</Text>
              </TouchableOpacity>  
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