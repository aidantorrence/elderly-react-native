import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

function ScheduleCalendar ({ navigation, route }) {
    const [data, setData] = useState(route.params);
    const [date, setDate] = useState(Math.ceil(new Date() / 1000 / 60 / 30) * 30 * 60 * 1000);
    const [show, setShow] = useState(true);

    function handlePress(item) {
        navigation.navigate('Profile')
      }
    const handleChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
        setDate(selectedDate || date);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.mainText}>Schedule Call</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile', new Date(date).toJSON())}>
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>              
            </View>
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'datetime'}
                is24Hour={true}
                display="inline"
                onChange={handleChange}
              />
        </SafeAreaView>
    )
}

export default ScheduleCalendar


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainText: {
    fontSize: 20,
    color: '#105F64',
    fontFamily: 'Spartan_600SemiBold',
    letterSpacing: -.41,
  },
  addText: {
    fontSize: 20,
    color: 'rgba(16, 95, 100, 0.45)',
    fontFamily: 'Spartan_500Medium',
    letterSpacing: -.41,
  },
  cancelText: {
    fontSize: 20,
    color: '#FAAA7D',
    fontFamily: 'Spartan_500Medium',
    letterSpacing: -.41,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
  },
  body: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
  },
  midText: {
      margin: 25,
      fontSize: 33,
      color: '#105F64',
    },
  midText2: {
      margin: 20,
      fontSize: 33,
      color: '#FAAA7D',
    },
  button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 40,
      width: 150,
      margin: 40,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: '#56B1B1',        
  },
  buttonText: {
      fontSize: 20,
      color: 'white',
  },
  bottom: {
      display: 'flex',
      flexDirection: 'row',
  },
});