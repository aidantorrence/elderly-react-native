import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

function LifeCalendar ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        console.log(route.params)
        navigation.navigate('LifeCalendarTwo',route.params)
      }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image style={{width: 150, height: 150, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midStartText}>That's... </Text>
                <Text style={styles.midText}>{route.params} years</Text>
            </View>

            <View style={styles.flexrow_container}>
                {new Array(route.params).fill(0).map((el,idx) => <View key={idx} style={styles.cell}></View>)}
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={[styles.button, styles.continue]} onPress={handlePress}>
                    <Text style={styles.buttonText} >In Months</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LifeCalendar



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    cell:{
        backgroundColor: '#FAAA7D',
        height: 60,
        width: 60,
        margin: 16,
    },
    flexrow_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 30,
        flex: 1,
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
        flexDirection: 'row',
    },
    midText: {
        margin: 20,
        marginHorizontal: 0,
        fontSize: 35,
        color: '#FAAA7D',
      },
    midStartText: {
        margin: 20,
        marginHorizontal: 0,
        fontSize: 35,
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