import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import app from '../config/firebase';
import { getAuth, sendPasswordResetEmail, } from 'firebase/auth';


const Forget = (props) => {
    const [email, setEmail] = useState(null);
    const auth = getAuth();

    const onForget = async () => {
        try {
            let res = await sendPasswordResetEmail(auth, email)
            props.navigation.navigate('Login')

        }
        catch (e) {

            console.log(e)
            alert('Please Enter Your Email')
        }
    }
    return (
        <View>
            <View style={style.ViewStyle}>
                <TextInput
                    style={style.TextInputStyle}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='Enter Your Email'
                />
                <TouchableOpacity onPress={onForget} style={style.ButtonStyle1}>
                    <Text style={style.ButtonTextStyle1}>Reset Password</Text>
                </TouchableOpacity>
                <Text style={{ marginBottom: 50 }}></Text>

            </View>

        </View>
    )
}
export default Forget



const style = StyleSheet.create({

    ViewStyle: {
        flexDirection: 'column',
        backgroundColor: '#E2BB17',
        borderBottomEndRadius: 80,
        borderTopStartRadius: 80,
        marginTop: 180
    },

    TextInputStyle: {
        height: 50,
        marginLeft: 35,
        marginRight: 35,
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#1FB0C2',
        borderRadius: 20,
        marginTop: 90
    },

    TextInputStyle2: {
        height: 50,
        marginLeft: 35,
        marginRight: 35,
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#1FB0C2',
        borderRadius: 20,
        marginTop: 20
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
})