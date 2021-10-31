import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

function LifeCalendarTwo ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        console.log(route.params)
        navigation.navigate('Schedule')
      }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image style={{width: 105, height: 105, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midText}>{route.params * 52} weeks</Text>
            </View>

            <View style={styles.flexrow_container}>
                {new Array(route.params).fill(0).map((el,idx) => <Cell key={idx}></Cell>)}
            </View>

            <View style={styles.bottom}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#318A8F', '#54AFAF', '#5BB6B5' ]} 
              locations={[ 0, 0.7, 1]}
              style={[styles.button, styles.continue]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
                <TouchableOpacity  onPress={handlePress}>
                    <Text style={styles.buttonText} >Schedule</Text>
                </TouchableOpacity>
            </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default LifeCalendarTwo

function Cell () {
    return <View style={styles.cell}>
        {new Array(52).fill(0).map((el,idx) => <View key={idx} style={styles.smallCell}></View>)}
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    cell:{
        height: 60,
        width: 60,
        margin: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 72,
    },
    smallCell:{
        backgroundColor: '#FAAA7D',
        height: 4.5,
        width: 4.5,
        margin: 2,
    },
    flexrow_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 30,
        marginTop: 10,
        flex: 1,
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
    },
    midText: {
        margin: 20,
        fontSize: 28,
        color: '#FAAA7D',
        fontFamily: 'Spartan_400Regular',
        letterSpacing: -1,
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