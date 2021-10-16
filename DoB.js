import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

function DoB ({ navigation, route }) {
    const [date, setDate] = useState(new Date(-864042434000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);


    const handleChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

    function handlePress(item) {
        navigation.navigate('LifeExpectancy')
      }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.main}>
                <Image style={{width: 150, height: 150, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midText}>What is their date of birth?</Text>
            </View>            


            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={handleChange}
              />
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Text style={styles.button}>Estimate</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DoB

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
        fontSize: 33,
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