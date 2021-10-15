import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function DoB ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('Profile')
      }
    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Text style={styles.button}>Cancel</Text>
                    <Text style={styles.button}>Add</Text>
                </View>
            </TouchableOpacity>
            <Text>Insert Calendar Here</Text>
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