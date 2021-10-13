import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function DoB ({ navigation, route }) {
    const [data, setData] = useState(route.params);

    function handlePress(item) {
        navigation.navigate('LifeExpectancy')
      }
    return (
        <View>
            <Text>What's their date of birth?</Text>
            <TouchableOpacity onPress={handlePress}>
                <View>
                    <Text>MM/DD/YYYY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DoB