import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as Contacts from 'expo-contacts'

import { LinearGradient } from 'expo-linear-gradient';

async function getContacts () {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        // fields: [Contacts.Fields.Emails],
      });
    //   console.log(data)
      return data
      
    }
}


function Empty({ navigation }) {
    const [contacts, setContacts] = useState([])



    async function handlePress() {
        const data = await getContacts()
        // console.log(data)
        navigation.navigate('Contacts', data)
    }

    return (
        <SafeAreaView >
            <LinearGradient
              // Background Linear Gradient
              colors={['#188B92', '#6ECBC7', '#FEC3A2' ]} 
              locations={[ 0, 0.4, .8]}
              style={styles.background}
            >
            <View style={styles.main}>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Text style={styles.cancelText}>   </Text>
              </TouchableOpacity>
              <Text style={styles.mainText}>Loved Ones</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile', date.toJSON())}>
                <Image resizeMode="contain" style={{width: 25, height: 25,}}source={require('./assets/personBadgePlus.png')}/>
              </TouchableOpacity>              
            </View>
            <View style={styles.container}>
              <View style={styles.body}>
                <Text style={styles.bodyText}>To get started, add a loved one to your profile.</Text>
              </View>
              <LinearGradient
                colors={['#54AFAF', '#318A8F', '#022' ]} 
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                // locations={[0, 0.6, 1]}
                style={styles.button} 
              >
              <TouchableOpacity onPress={handlePress}>
                  <Text style={styles.buttonText}>Add loved one</Text>
              </TouchableOpacity>
              </LinearGradient>
            </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default Empty
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 80,
  },
  mainText: {
      fontSize: 20,
      color: '#fff',
      fontFamily: 'Spartan_500Medium',
      letterSpacing: -.41,
    },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    borderWidth: .2,
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily: 'Spartan_600SemiBold',
    color: 'white',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  bodyText: {
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'Spartan_300Light',
    letterSpacing: -.5,
  },
  body: {
    margin: 20,
    marginTop: 30,
    color: 'rgba(255, 255, 255, 0.85)',
  },
});