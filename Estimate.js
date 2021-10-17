import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

function Estimate ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('DoB')
      }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image style={{width: 150, height: 150, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midText}>Let's Estimate the time we can spend with them</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={[styles.button, styles.skip]} onPress={handlePress}>
                    <Text style={styles.buttonText} >Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.continue]} onPress={handlePress}>
                    <Text style={styles.buttonText} >Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Estimate



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
        flex: 1
    },
    midText: {
        margin: 20,
        fontSize: 25,
        color: '#105F64',
      },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 40,
        width: 130,
        margin: 40,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    skip: {
        backgroundColor: 'gray',
    },
    continue: {
        backgroundColor: '#56B1B1',
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
    }
  });