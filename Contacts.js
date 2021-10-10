import React from 'react'
import { View, Text, FlatList } from 'react-native'

function Contacts ({ navigation, route }) {

    return (
        <View>
            {route.params.map(user => <Text key={user.id}>{user.name}</Text>)}
        </View>
    )
}

export default Contacts
