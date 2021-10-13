import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function Contacts ({ navigation, route }) {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(route.params);




    
    const handleSearch = text => {
        setSearch(text) 
        text = text.toLowerCase();
        const filteredData = route.params.filter(user => {
            return user.name.toLowerCase().includes(text)
        });
        setData(filteredData)
    };



    function handlePress(item) {
      navigation.navigate('Estimate', { data: item })
    }
    
    function renderHeader() {
        return (
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20
            }}
          >
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={search}
              onChangeText={text => handleSearch(text)}
              placeholder="Search"
              style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
            />
          </View>
        );
    }
    return (<>
        <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20
            }}
          >
            <TextInput
            //   autoCapitalize="none"
            //   autoCorrect={false}
            //   clearButtonMode="always"
              value={search}
              onChangeText={text => handleSearch(text)}
              placeholder="Search"
              style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
            />
          </View>
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <View style={styles.listItem}>
                      <Text style={styles.listItemText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
            )}
        />
        {/* // <View>
        //     {route.params.map(user => <Text key={user.id}>{user.name}</Text>)}
        // </View> */}
    </>)
}

export default Contacts


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center'
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