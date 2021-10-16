import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
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
              colors={['#74D1CC', '#318A8F']}
              style={styles.background}
            >
            <View style={styles.container}>
              <View style={styles.main}>
                <Text style={styles.mainText}>To get started, add a loved one to your profile.</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={handlePress}>
                  <Text style={styles.buttonText}>Add Loved One Profile</Text>
              </TouchableOpacity>
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
    justifyContent: 'center',
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
    width: 200,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  mainText: {
    fontSize: 35,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  main: {
    margin: 20,
    color: 'rgba(255, 255, 255, 0.85)',
  },
});