import {router} from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home(){

    const go = () => {
        router.push('/(tabs)')
    }

    return(
        <View>
            <Text>Inicial</Text>
            <TouchableOpacity onPress={go}>
            <Text>Ir para a tabs </Text>
            </TouchableOpacity>
        </View>
    )
}

const s = StyleSheet.create({

})