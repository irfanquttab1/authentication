import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import app from '../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';



const Signup = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const auth = getAuth();

    const onSignup = async () => {
        try {
            let res = await createUserWithEmailAndPassword(auth, email, password);
            props.navigation.navigate('Login')
        }
        catch (e) {

            console.log(e)
            alert('Please Enter Your Email & Password')
        }
    }
    return (
        <View>
            <View>
                <Text style={style.Text1Style}>Existing User?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={style.ButtonStyle1}>
                    <Text style={style.ButtonTextStyle1}>Log In</Text>
                </TouchableOpacity>
            </View>

            <View style={style.ViewStyle}>

                <Text style={style.Text2Style}>Sign Up With</Text>
                <Text style={style.Text3Style}>e-Rozgaar Training Program</Text>

                <TextInput
                    style={style.TextInputStyle}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='Enter Your Email'
                />
                <TextInput
                    style={style.TextInputStyle}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder='Enter Your Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={onSignup} style={style.ButtonStyle2}>
                    <Text style={style.ButtonTextStyle2}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Signup

const style = StyleSheet.create({

    ViewStyle: {
        flexDirection: 'column',
        backgroundColor: '#E2BB17',
        borderBottomEndRadius: 80,
        borderTopStartRadius: 80
    },

    Text1Style: {
        marginLeft: 50,
        marginBottom: 20,
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 40
    },

    ButtonStyle1: {
        backgroundColor: "#E2BB17",
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 40

    },

    ButtonTextStyle1: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
    },

    Text2Style: {
        marginTop: 100,
        marginLeft: 30,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },

    Text3Style: {
        marginTop: 10,
        marginLeft: 30,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'

    },
    TextInputStyle: {
        height: 50,
        marginLeft: 35,
        marginRight: 35,
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#1FB0C2',
        borderRadius: 20,
        marginTop: 15
    },

    ButtonStyle2: {
        backgroundColor: "#000000",
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        marginBottom: 143


    },

    ButtonTextStyle2: {
        fontSize: 15,
        color: "#E2BB17",
        fontWeight: "bold",
        alignSelf: "center",
    },


})