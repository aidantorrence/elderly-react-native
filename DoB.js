import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
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
        <View>
            <Text style={styles.listItem}>What's their date of birth?</Text>

                <View>
                    <Text style={styles.listItem}>Select</Text>
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
        </View>
    )
}

export default DoB

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
    text: {
      fontSize: 20,
      color: '#101010',
      marginTop: 60,
      fontWeight: '700'
    },
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    coverImage: {
      width: 100,
      height: 100,
      borderRadius: 8
    },
    metaInfo: {
      marginLeft: 10
    },
    title: {
      fontSize: 18,
      width: 200,
      padding: 10
    }
  });