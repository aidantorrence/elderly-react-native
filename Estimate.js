import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Estimate ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('DoB')
      }
    return (
        <View>
            <Text style={styles.listItem}>Let's Estimate the time we can spend with them</Text>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Text style={styles.button} >Estimate</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Estimate



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