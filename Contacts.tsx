import React, { useState } from 'react'
import { View, SafeAreaView, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { storeData } from './utils/asyncStorage.js'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/screenNavigator'
import * as ExpoContacts from 'expo-contacts'

type ContactProps = NativeStackScreenProps<RootStackParamList, 'Contacts'>;

function Contacts ({ navigation, route }: ContactProps) {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(route.params?.slice().sort((a, b) => {
      const numA = a.firstName ? a.firstName.toLowerCase() : 1
      const numB  = b.firstName ? b.firstName.toLowerCase() : 1
      return numA > numB ? 1 : (numA < numB ? -1 : 0);
    }))
    
    const handleSearch = (text: string) => {
        setSearch(text) 
        text = text.toLowerCase();
        const filteredData = data?.filter(user => {
            return user.name && user.name.toLowerCase().includes(text)
        });
        setData(filteredData)
    };



    function handlePress(item: ExpoContacts.Contact) {
      storeData('name', item.name)
      navigation.navigate('LifeCalendarIntro')
    }
    
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={()=>navigation.navigate('Empty')}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>Pick a Contact</Text>
        <Text style={styles.mainText}>            </Text>
      </View>
        <View
            style={{
              backgroundColor: 'rgba(118, 118, 128, 0.12)',
              padding: 10,
              borderRadius: 12,
              margin: 20,
              flexDirection: 'row',
            }}
          >
            <Image resizeMode="contain" style={{width: 20, height: 20,}}source={require('./assets/magnifyingglass.png')}/>
            <TextInput
              value={search}
              onChangeText={text => handleSearch(text)}
              placeholder="Search"
              placeholderTextColor='rgba(60, 60, 67, 0.6)'
              style={{ paddingHorizontal: 20, fontSize: 20}}
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
      backgroundColor: '#ffffff',
      flex: 1,
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
      fontFamily: 'Spartan_500Medium',
      letterSpacing: -.5,
    },
    cancelText: {
      fontSize: 20,
      color: '#FAAA7D',
      fontFamily: 'Spartan_500Medium',
      letterSpacing: -.5,
    },
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    listItem: {
      paddingVertical: 18,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderTopColor: 'rgba(0, 0, 0, 0.2)',
      borderBottomColor: 'rgba(0, 0, 0, 0.2)',
      borderTopWidth: .4,
      borderBottomWidth: .4,
    },
    listItemText: {
      fontWeight: '500',
      fontSize: 20,
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