import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={s.wrap}>
            <Text style={s.title}>index das tabs</Text>
        </View>
    );
}

const s = StyleSheet.create({
    title: {
        color: 'red'
    },
    wrap: {
        backgroundColor: 'orange'
    }
});