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

      
      <SafeAreaView style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#188B92', '#6ECBC7', '#FEC3A2' ]} 
        locations={[ 0, 0.4, .8]}
        style={styles.background}
        >
            <View style={styles.main}>
              <Text style={styles.mainText}> </Text>
              <Text style={styles.mainText}>Loved Ones</Text>
              <TouchableOpacity >
                <Image resizeMode="contain" style={{width: 25, height: 25,}}source={require('./assets/personBadgePlus.png')}/>
              </TouchableOpacity>
            </View>
            <ProfileItem date={month + ' ' + day+', '+time}/>
        </LinearGradient>
          </SafeAreaView>
    )
}

export default Profile

function ProfileItem ({ date }) {

  function handlePress(item) {
    navigation.navigate('Schedule')
  }

  return (
      <View style={styles.listItem}>
        <Image style={{width: 92, height: 92, borderRadius: 100,}}source={require('./assets/GrandMomMay.png')}/>
        <View style={styles.listItemBody}>
          <Text style={styles.titleText}>Grand Mom May</Text>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.date}>
              <Image resizeMode="contain" style={{width: 23, height: 23,}}source={require('./assets/calendarIcon.png')}/>
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
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(18, 122, 129, 0.22)',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    margin: 15,
    padding: 15,
    paddingLeft: 18,
    borderRadius: 10,
  },
  listItemBody: {
    marginLeft: 20,
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
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Spartan_500Medium',
    letterSpacing: -.41,
  },
  addText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  titleText: {
    fontSize: 19.5,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Spartan_600SemiBold',
    letterSpacing: -.41,
    marginBottom: 8,
  },
  dateText: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Spartan_500Medium',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 80,
    marginBottom: 10,
  },
});


