
import React, {useState} from 'react';
import {View,Button,StyleSheet, TextInput, Keyboard,  FlatList, Text, Alert} from 'react-native';


export default function HomeScreen({navigation}) {
   const [desc, setDesc] = useState('');
   const [location, setLocation] = useState('');
   const [jobs, setJobs] = useState([]);
    
   URL = `https://jobs.github.com/positions.json?description=${desc}&location=${location}`;
        
   const getJobs = () => {
       fetch(URL)
       .then(response => response.json())
       .then(data => {
           setJobs(data);
       })
       .catch((error) => {
           Alert.alert('Error', error);
       });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{fontSize: 18, marginTop: "20%", width: 200}} value={desc}
                placeholder='Description' onChange={desc => setDesc(desc)}
            />
            <TextInput
                style={{fontSize: 18, width: 200}} value={location}
                placeholder='Location' onChange={location => setLocation(location)} />
            <Button title="Find" onPress={getJobs}></Button>
            <FlatList
                style={{marginLeft: "5%"}}
                keyExtractor={item=> item.id}
                renderItem={({item}) => <Text>{item.title}, {item.company}</Text>}
                data={jobs}
             />
              

            <Button title="Settings" onPress={() => navigation.navigate('Settings')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });