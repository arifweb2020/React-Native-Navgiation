import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwsome from 'react-native-vector-icons/FontAwesome5';
//import Axios from 'axios';
import google from '../../assets/img/google.png';
//
import BackgroundImg from '../../assets/img/bg-transferent.png';

export default function Signup() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //
  const navigation = useNavigation();

  const signupUser = async () => {
    if (!email) {
      return alert('Enter email');
    } else if (!password) {
      return alert('Enter password');
    }
    setEmail('');
    setPassword('');
    navigation.navigate('Login');
    // try {
    //   const { data } = await fetch('http://192.168.0.102/api/signup.php', {
    //     email: email,
    //     password: password,
    //   });

    //   if (data.status == 'success') {
    //     alert('User Created Successfully');
    //   } else {
    //     alert('User Not Created');
    //   }

    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.topBackgroundImgContainer}>
        <Image
          source={BackgroundImg}
          style={styles.backgroundImg}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomBackgroundImgContainer}></View>
      <View style={styles.formContainer}>
        <View style={styles.formTopContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}><FontAwsome name="angle-left" size={30} color="#fff" />
          </TouchableOpacity>

          <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
            Kill With Me!
          </Text>
        </View>
        <View style={styles.formBottomContainer}>
          <View style={styles.formBottomSubContainer}>
            {/*  */}
            <View style={styles.customInputContainer}>
              <Text>Email</Text>
              <TextInput
                style={{padding: 0}}
                onChangeText={text => setEmail(text)}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.customInputContainer}>
              <Text>Password</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                  style={{padding: 0}}
                  secureTextEntry={!isPasswordVisible}
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <FontAwsome
                    name={isPasswordVisible ? 'eye-slash' : 'eye'}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/*  */}
            {/*  */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                signupUser();
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>
                Signup
              </Text>
            </TouchableOpacity>
            {/*  */}
            {/*  */}
            <Text style={{textAlign: 'center', color: '#fff'}}>Or</Text>
            {/*  */}
            {/*  */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                {
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  padding: 20,
                  justifyContent: 'space-around',
                },
              ]}>
              <Image source={google} style={{height: 30, width: 30}} />
              <Text style={{fontWeight: 'bold'}}>Continue With Google</Text>
              <View></View>
            </TouchableOpacity>
            {/*  */}
            {/*  */}
            <View>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Text style={{color: '#fff'}}>Already Have An Account</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      color: '#02C38E',
                      fontWeight: 'bold',
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 5,
                    color: '#02C38E',
                    fontWeight: 'bold',
                  }}>
                  Forget Your Password ?
                </Text>
              </TouchableOpacity>
            </View>
            {/*  */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050907',
  },
  topBackgroundImgContainer: {
    flex: 1.5,
    alignItems: 'flex-end',
  },
  backgroundImg: {
    height: '100%',
    width: '80%',
    marginRight: -15,
  },
  bottomBackgroundImgContainer: {
    flex: 1,
  },
  formContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  formTopContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 10,
  },
  formBottomContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBottomSubContainer: {
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'rgba(127,127,127,0.5)',
    padding: 20,
  },
  customInputContainer: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#02C38E',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#02C38E',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
});
