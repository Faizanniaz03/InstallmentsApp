import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomTI from '../components/CustomTI'
import { RegularFont, primaryColor, secondaryColor } from '../utils/Style'
import CustomButton from '../components/CustomButton'
import CustomTO from '../components/CustomTO'
import PasswordTI from '../components/PasswordTI'
import auth from '@react-native-firebase/auth'


const Login = ({navigation}) => {
    const {height,width} = useWindowDimensions()
    const [secureEntry,setSecureEntry] = useState(true)
    const toggle=()=>{
        setSecureEntry(!secureEntry)
    }
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const Login = ()=>{
        auth().signInWithEmailAndPassword(Email,Password)
        .then(()=>{
            navigation.navigate('AddNew')
            setEmail('')
            setPassword('')
            setSecureEntry(true)
        })
        .catch(err=>console.warn(err))
    }
    return (
    <View style={{
        height:height,
        width:width,
    }}>
        <View style={styles.subView}>
            <Text style={styles.welcomeText} >Welcome</Text>
        </View>
        <View style={styles.subViewTwo}>
        <CustomTI title={'Enter Your Email Address'} onChange={(val)=>setEmail(val)} val={Email}/>
        <PasswordTI title={'Enter Your Password'} password={secureEntry} action={toggle} onChange={(val)=>setPassword(val)} val={Password}/>
        <CustomButton title={'Login'} action={Login} />
        <CustomTO details={'Dont Remember your Password ? '} title={'Forget Password'} action={()=>navigation.navigate('ForgetPW')}/>
        <CustomTO details={'Dont Have an Account ? '} title={'SignUp'} action={()=>navigation.navigate('SignUp')}/>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    subView:{
        height:'35%',
        justifyContent:'flex-end',
        marginBottom:20
    },
    welcomeText:{
        textAlign:'center',
        fontSize:40,
        fontFamily:RegularFont,
        color:primaryColor
    },
    subViewTwo:{
        justifyContent:'flex-start',
        height:'55%',
    },

})