import React, { useState } from 'react'
import { View, SafeAreaView, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { storeData } from './utils/asyncStorage.js'



function Contacts ({ navigation, route }) {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(route.params.sort((a,b) => {
      a = a.firstName ? a.firstName.toLowerCase() : 1
      b = b.firstName ? b.firstName.toLowerCase() : 1
      return a > b ? 1 : (a < b ? -1 : 0);
    }))
    
    const handleSearch = text => {
        setSearch(text) 
        text = text.toLowerCase();
        const filteredData = data.filter(user => {
            return user.name && user.name.toLowerCase().includes(text)
        });
        setData(filteredData)
    };



    function handlePress(item) {
      storeData('name', item.name)
      navigation.navigate('Estimate', { data: item })
    }
    
    return (
    <SafeAreaView>
      <View style={styles.main}>
        <TouchableOpacity onPress={()=>navigation.navigate('Empty')}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>Choose a Contact</Text>
        <Text style={styles.mainText}>            </Text>
      </View>
        <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
              borderRadius: 20
            }}
          >
            <TextInput
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
    </SafeAreaView>)
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
    mainText: {
      fontSize: 20,
      color: '#105F64',
    },
    cancelText: {
      fontSize: 20,
      color: '#FAAA7D',
    },
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
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