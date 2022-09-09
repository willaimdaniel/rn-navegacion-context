import { StyleSheet, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContext } from '../context/NavegationContext';
import { AntDesign } from '@expo/vector-icons';

export default function BarNavegation() {

    const { setpage } = useContext(NavigationContext)

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setpage('home')}>
                <AntDesign name="bank" size={40} color="black" />
            </Pressable>
            <Pressable onPress={() => setpage('pageone')}>
                <AntDesign name="book" size={40} color="black" />
            </Pressable>
            <Pressable onPress={() => setpage('pagetwo')}>
                <AntDesign name="mail" size={40} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-evenly'
    }
})