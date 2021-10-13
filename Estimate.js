import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Estimate ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('DoB')
      }
    return (
        <View>
            <Text>Let's Estimate the time we can spend with them</Text>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Text>Estimate</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Estimate
