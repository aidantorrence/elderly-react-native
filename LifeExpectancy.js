import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { expectancies } from './utils/conversion'

function DoB ({ navigation, route }) {
    const [data, setData] = useState(route.params);
    const [age,setAge] = useState('79')

    function handlePress(item) {
        navigation.navigate('Schedule')
      }
    return (
        <View>
            <Text style={styles.listItem} >The calculated average life expectancy of a 79 year old woman is</Text>
            <Text style={styles.listItem}>{expectancies[age].f}</Text>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Text style={styles.button}>Discard</Text>
                    <Text style={styles.button}>Add to Profile</Text>
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