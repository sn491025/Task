import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Data = [
    {
        Name: 'sankara',
        id: 1
    },
    {
        Name: 'naryanan',
        id: 2
    },
    {
        Name: 'Dev',
        id: 3
    },
    {
        Name: 'Leo',
        id: 4
    },
    {
        Name: 'Eswar',
        id: 5
    },
]

const Item = ({ Name }) => (
    <View style={style.Container}>
        <Text style={style.forText}>{Name}</Text>
    </View>
);


export default function Flatlist() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        <Item title={item.Name} />
    }
    return (
        <View>
        <TouchableOpacity>
            <FlatList data={Data}
                keyExtractor={item => item.id}
                renderItem={renderItem} 
            />
        </TouchableOpacity>
        <Button
        title='Next'
        onPress={() => navigation.navigate('image')}
         />
        </View>

    )
}


const style = StyleSheet.create({
    forText: {
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: '#70FF00',
        fontSize: 10,
    },
    Container: {
        margin: 20,
        flex: 1
    }

})