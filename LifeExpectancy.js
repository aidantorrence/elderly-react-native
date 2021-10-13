import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function DoB ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('Schedule')
      }
    return (
        <View>
            <Text>The calculated average life expectancy of a 79 year old woman is</Text>
            <Text>89</Text>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Text>Discard</Text>
                    <Text>Add to Profile</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DoB