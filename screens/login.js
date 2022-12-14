import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native"
import app from '../config/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const auth = getAuth();

    const onSignin = async () => {
        try {
            setLoading(true)
            let res = await signInWithEmailAndPassword(auth, email, password)
            props.navigation.navigate('Signup')
            setLoading(false)

        }
        catch (e) {

            console.log(e)
            alert('Enter Your Correct Credentials')
            setLoading(false)
        }
    }





    return (
        <View>
            <View style={style.mainviewstyle}>

                <Text style={style.Text1Style}>Welcome To</Text>
                <Text style={style.Text2Style}>e-Rozgaar Training Program</Text>
                <Text style={style.Text3Style}>Please Login To Continue</Text>
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

                {
                    !loading ?  //condition
                        // then true case
                        <TouchableOpacity onPress={onSignin} style={style.ButtonStyle1}>
                            <Text style={style.ButtonTextStyle1}>Log In</Text>
                        </TouchableOpacity> :
                        <ActivityIndicator animating={true} /> // then false case

                }

                <TouchableOpacity onPress={() => props.navigation.navigate('Forget')}>
                    <Text style={style.Text4Style}>Forget Password</Text>
                </TouchableOpacity>

            </View>
            <View>
                <Text style={style.Text5Style}>OR</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} style={style.ButtonStyle2}>
                    <Text style={style.ButtonTextStyle2}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Login



const style = StyleSheet.create({

    mainviewstyle: {
        flexDirection: 'column',
        backgroundColor: '#E2BB17',
        borderBottomEndRadius: 80,
        borderTopStartRadius: 80
    },

    Text1Style: {
        marginTop: 100,
        marginLeft: 30,
        color: 'black',
        fontSize: 20
    },

    Text2Style: {
        marginTop: 10,
        marginLeft: 30,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'

    },

    Text3Style: {

        marginTop: 10,
        marginLeft: 30,
        color: 'black',
        fontSize: 15
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

    ButtonStyle1: {
        backgroundColor: "#000000",
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 15


    },

    ButtonTextStyle1: {
        fontSize: 15,
        color: "#E2BB17",
        fontWeight: "bold",
        alignSelf: "center",
    },

    Text4Style: {
        marginLeft: 40,
        marginBottom: 20,
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10
    },

    Text5Style: {
        alignSelf: 'center',
        color: '#E2BB17',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30

    },

    ButtonStyle2: {
        backgroundColor: "#E2BB17",
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 15

    },

    ButtonTextStyle2: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
    }
})