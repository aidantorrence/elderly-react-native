import React, { useState } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/screenNavigator'

type Props = NativeStackScreenProps<RootStackParamList, 'LifeCalendarIntro'>;

function LifeCalendarIntro ({ navigation }: Props) {

    function handlePress() {
        navigation.navigate('Gender')
      }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image style={{width: 105, height: 105, borderRadius: 300,}}source={require('./assets/GrandMomMay.png')}/>
                <Text style={styles.mainText} >Grand Mom May</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.midText}>Would you like to explore a life calendar for your loved one?</Text>
            </View>
            <View style={styles.bottom}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#318A8F', '#54AFAF', '#5BB6B5' ]} 
              locations={[ 0, 0.7, 1]}
              style={[styles.button, styles.skip]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
                <TouchableOpacity  onPress={handlePress}>
                    <Text style={styles.buttonText} >Not Right Now</Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              // Background Linear Gradient
              colors={['#318A8F', '#54AFAF', '#5BB6B5' ]} 
              locations={[ 0, 0.7, 1]}
              style={[styles.button, styles.continue]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            >
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.buttonText} >Yes</Text>
                </TouchableOpacity>
            </LinearGradient>                
            </View>
        </SafeAreaView>
    )
}

export default LifeCalendarIntro



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
        fontWeight: 'bold',
        fontFamily: 'Spartan_600SemiBold',
        letterSpacing: -.5,
      },
    body: {
        flex: 1,
        margin: 29,
        marginTop: 15,
    },
    midText: {
        fontSize: 29,
        color: '#105F64',
        fontFamily: 'Spartan_400Regular',
        letterSpacing: -1,
        lineHeight: 38,
      },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 27,
        margin: 40,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 30,
        paddingRight: 30,
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