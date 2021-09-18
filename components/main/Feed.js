import React from 'react'
import firebase from 'firebase/app'
import { View, Text, Button } from 'react-native'

export default function Feed() {
    const handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log("signed out")
        }, function (error) {
            console.log(error)
        });
    }

    return (
        <View>
            <Text>FEED</Text>
            <Button title="Logout" onPress={() => handleLogout()} />
        </View>
    )
}
