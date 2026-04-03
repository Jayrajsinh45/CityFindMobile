import { auth } from '../../configs/FirebaseConfig';
import { View, Text, Image } from 'react-native'
import React from 'react'


export default function UserIntro() {
    const user = auth.currentUser;
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30
        }}>
            <Image source={{ uri: user?.photoURL }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 99,
                    marginBottom: 10
                }}
            />
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20
            }}>{user?.displayName}</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 16
            }}>{user?.email}</Text>
        </View>
    )
}