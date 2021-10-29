import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

function Gender ({ navigation, route }) {
    const [gender, setGender] = useState('male');

    function handlePress(gender) {
        navigation.navigate('DoB', gender)
      }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.main}>
                <Image style={{width: 105, height: 105, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midText}>What's their gender?</Text>
            </View>    
            <View style={styles.genderButton}>
                <TouchableOpacity style={styles.button} onPress={()=>handlePress('woman')}>
                <Text style={styles.buttonText} >Female</Text>
                </TouchableOpacity>              
                <TouchableOpacity style={styles.button} onPress={()=>handlePress('man')}>
                <Text style={styles.buttonText} >Male</Text>
                </TouchableOpacity>              
            </View>
        </SafeAreaView>
    )
}

export default Gender

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
    },
    midText: {
        margin: 20,
        fontSize: 29,
        color: '#105F64',
        fontFamily: 'Spartan_400Regular',
        letterSpacing: -1,
      },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 40,
        width: 130,    
    },
    genderButton: {
        flexDirection: 'row', 
    },
    buttonText: {
        fontSize: 20,
        color: 'orange',
        fontFamily: 'Spartan_600SemiBold',
        letterSpacing: 1,   
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
    },
  });