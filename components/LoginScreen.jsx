import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { auth } from './../configs/FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onPress = async () => {
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
        } catch (err) {
            console.error("Auth error", err);
            alert(err.message);
        }
    };

    return (
        <View>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 100
            }}>
                <Image source={require('./../assets/images/login.png')}
                    style={{
                        width: 220,
                        height: 450,
                        borderRadius: 20,
                        borderWidth: 6,
                        borderColor: '#000'
                    }}
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={{
                    fontSize: 28,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center'
                }}>Your Ultimate
                    <Text style={{
                        color: Colors.PRIMARY,
                    }}> Community CityFind</Text> App</Text>
                <Text style={{
                    fontSize: 15,
                    fontFamily: 'outfit',
                    textAlign: 'center',
                    marginVertical: 15,
                    color: Colors.GRAY
                }}>Find your favourite business near you</Text>
                
                <TextInput 
                    placeholder="Email" 
                    value={email} 
                    onChangeText={setEmail}
                    style={styles.input}
                    autoCapitalize="none"
                />
                <TextInput 
                    placeholder="Password" 
                    value={password} 
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontFamily: 'outfit'
                    }}>{isLogin ? 'Login' : 'Sign Up'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 15 }}>
                    <Text style={{ textAlign: 'center', color: Colors.PRIMARY, fontFamily: 'outfit' }}>
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: -20,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.GRAY,
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        fontFamily: 'outfit'
    },
    btn: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        borderRadius: 99,
        marginTop: 10
    }
})
