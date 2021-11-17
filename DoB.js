import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import { LinearGradient } from 'expo-linear-gradient';

function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

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
        navigation.navigate('LifeExpectancy', {age: calculate_age(date),gender: route.params.gender })
      }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.main}>
                <Image style={{width: 105, height: 105, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midText}>What's their date of birth?</Text>
              <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="spinner"
                  onChange={handleChange}
                />
              </View>    
              <LinearGradient
              // Background Linear Gradient
              colors={['#318A8F', '#54AFAF', '#5BB6B5' ]} 
              locations={[ 0, 0.7, 1]}
              style={[styles.button, styles.continue]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >              
              <TouchableOpacity onPress={handlePress}>
                <Text style={styles.buttonText} >Estimate</Text>
              </TouchableOpacity>              
            </LinearGradient>
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
        flex: 1
    },
    midText: {
        margin: 20,
        fontSize: 28,
        color: '#105F64',
        fontFamily: 'Spartan_400Regular',
        letterSpacing: -1,
      },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 27,
        width: 130,
        margin: 40,
        backgroundColor: '#56B1B1',        
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Spartan_500Medium',
        letterSpacing: -.41,
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
    },
  });