
import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList, Text, Alert} from 'react-native';
import {TextInput } from 'react-native-gesture-handler';

export default function SettingScreen() {
    const [rec, setRec] = useState('');
    const [recipeList, setRecipeList] = useState([]);

    const getRecipe = () => {
        const url = `http://www.recipepuppy.com/about/apii=${rec}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setRecipeList(data)
        })
        .catch((error) => {
            Alert.alert('Error', error)
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
               
                style={{fontSize: 18, marginTop: "20%", width: 200}} value={rec}
                placeholder='Description' onChange={rec => setRec(rec)}
            />
                <Button title="Find" onPress={getRecipe}></Button>
            <FlatList
                style={{marginLeft: "15%"}}
                keyExtractor={item=> item.id}
                renderItem={({item}) => <Text>{item.title}, {item.results.ingredients}</Text>}
                data={recipeList}
             />
            <Text>This is Setting Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });