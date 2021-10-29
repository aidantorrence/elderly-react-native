import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

function LifeCalendarTwo ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        console.log(route.params)
        navigation.navigate('Schedule')
      }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image style={{width: 150, height: 150, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midText}>{route.params * 52} weeks</Text>
            </View>

            <View style={styles.flexrow_container}>
                {new Array(route.params).fill(0).map((el,idx) => <Cell key={idx}></Cell>)}
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={[styles.button, styles.continue]} onPress={handlePress}>
                    <Text style={styles.buttonText} >Schedule</Text>
                </TouchableOpacity>
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
        margin: 14,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    smallCell:{
        backgroundColor: '#FAAA7D',
        height: 5,
        width: 5,
        margin: 1,
    },
    flexrow_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 35,
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
    },
    midText: {
        margin: 20,
        fontSize: 35,
        color: '#FAAA7D',
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