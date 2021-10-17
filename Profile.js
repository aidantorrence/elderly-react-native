import React, { useState } from 'react'
import { SafeAreaView, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function getOrdinalNum(n) {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

function Profile ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    
    const date = new Date(route.params)
    const month = date.toLocaleDateString('en-US', { month: 'short'})
    const day = getOrdinalNum(date.toLocaleDateString('en-US', { day: 'numeric' }))
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

    return (


        <LinearGradient
          colors={['#74D1CC', '#318A8F']}
          style={styles.background}
        >
          <SafeAreaView style={styles.container}>
            <View style={styles.main}>
              <Text style={styles.mainText}> </Text>
              <Text style={styles.mainText}>Loved Ones</Text>
              <TouchableOpacity >
                  <Text style={styles.addText} >Add</Text>
              </TouchableOpacity>
            </View>
            <ProfileItem date={month + ' ' + day+', '+time}/>
          </SafeAreaView>
        </LinearGradient>
    )
}

export default Profile

function ProfileItem ({ date }) {

  function handlePress(item) {
    navigation.navigate('Schedule')
  }

  return (
      <View style={styles.listItem}>
        <Image style={{width: 75, height: 75, borderRadius: 100,}}source={require('./assets/GrandMomMay.png')}/>
        <View>
          <Text style={styles.titleText}>Grand Mom May</Text>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.date}>
              <Image resizeMode="contain" style={{width: 20, height: 20,}}source={require('./assets/calendarIcon.png')}/>
              <Text style={styles.dateText}>  {date}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(200, 208, 202, 0.2)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 20,
    padding: 15,
    width: '100%',
    borderRadius: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    width: 200,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  mainText: {
    fontSize: 25,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  addText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
  },
  dateText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    color: 'rgba(255, 255, 255, 0.85)',
    width: '100%',
  },
});


