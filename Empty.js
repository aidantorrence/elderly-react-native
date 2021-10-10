import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts'

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
        <View style={styles.container}>
            <Text>Looks like there's no loved one to connect with, let's add one!</Text>

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text>Add Loved One Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Empty

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
  });
  