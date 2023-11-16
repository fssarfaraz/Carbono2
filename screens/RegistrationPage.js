import * as React from "react";
import {Image} from "expo-image";
import 
{
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  View,
} from "react-native";
import {Button} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import {FontSize, Padding, Color, Border, FontFamily} from "../GlobalStyles";
import {getDatabase, ref, set} from "firebase/database";
import {useState} from "react";
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from "../App";

const RegistrationPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = () => 
  {
    // Log the values of the input fields
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Name: ${name}`);
    console.log(`Username: ${username}`);

    // Check if all mandatory fields are filled
    if (!email || !password || !name || !username) 
    {
      alert("Please fill in all mandatory fields marked with *");
      return;
    }

    // Validate email format
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) 
    {
      alert("Please enter a valid email address");
      return;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!passwordRegex.test(password)) 
    {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      return;
    }

    // Get a reference to the database
    const database = getDatabase();

    // Create a new user object
    const user = {
      email,
      password,
      name,
      username,
      gender,
      address,
    };

    // Remove gender and address fields if they are empty
    if (gender === '') 
    {
      delete user.gender;
    }

    if (address === '') 
    {
      delete user.address;
    }

    // Log the user object
    console.log(user);

    // Set the user data in the database
    set(ref(database, 'users/' + username), user).then(() => 
    {
      // Create user in Firebase Authentication
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => 
      {
        // User successfully created
        alert("Registration successful!");
        // Navigate to the login page
        navigation.navigate("LoginPage");
      })
      .catch((authError) => {
        // An error occurred in Firebase Authentication
        alert("Error creating user in authentication: " + authError.message);
      });
    }).catch((error) => 
    {
      // An error occurred
      alert("Error creating user in database: " + error.message);
    });
  };

  return (
    <ScrollView>
    
    <View style={styles.registrationPage}>
      <Image
        style={[styles.registrationPageChild]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />

      <Image
        style={[styles.registrationPageItem]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />

      <ImageBackground
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />

      <Button
        title="Register Now"
        radius={30}
        iconPosition="left"
        type="solid"
        color="#428df8"
        titleStyle={styles.regsBtnText}
        onPress={handleRegister}
        containerStyle={styles.regsBtnCont}
        buttonStyle={styles.regsBtn}
      />

      <TextInput
        style={[styles.emailBox, styles.textBox,]}
        placeholder="Email Address *"
        placeholderTextColor="#0a0806"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        secureTextEntry 
        style={[styles.passBox, styles.textBox,]}
        placeholder="Password *"
        placeholderTextColor="#0a0806"
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        style={[styles.genderBox, styles.textBox,]}
        placeholder="Gender"
        placeholderTextColor="#0a0806"
        onChangeText={setGender}
        value={gender}
      />
      
      <TextInput
        style={[styles.addressBox, styles.textBox,]}
        placeholder="Address"
        placeholderTextColor="#0a0806"
        onChangeText={setAddress}
        value={address}
      />

      <TextInput
        style={[styles.nameBox, styles.textBox,]}
        placeholder="Name *"
        placeholderTextColor="#0a0806"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={[styles.userBox, styles.textBox,]}
        placeholder="Username *"
        placeholderTextColor="#0a0806"
        onChangeText={setUsername}
        value={username}
      />

      <Text
        style={[styles.tAndCs]}>
        {`By registering with Carbono, you agree to the T&Cs`}
      </Text>

      <Text 
        style={[styles.mandatory]}>
        Mandatory Fields are marked with *
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(
  {
  regsBtnText: 
  {
    color: "#fff",
    fontSize: 23,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
  },

  regsBtnCont: 
  {
    left: 69,
    padding: 10,
    top: 700,
    position: "absolute",
  },

  regsBtn: 
  {
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: 
    {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 256,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textBox: 
  {
    fontSize: FontSize.body15Regular_size,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: 256,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: 
    {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_11xl,
    left: 78,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    position: "absolute",
  },

  registrationPageChild: 
  {
    top: -150,
    height: 600,
    width: 500,
    position: "absolute",
    left: 130,
  },

  registrationPageItem: 
  {
    top: 450,
    height: 600,
    width: 500,
    left: -146,
    position: "absolute",
  },

  logoIcon: 
  {
    top: 44,
    width: 233,
    height: 238,
    left: 90,
    position: "absolute",
  },

  emailBox: 
  {
    top: 331,
  },

  passBox: 
  {
    top: 479,
  },

  genderBox: 
  {
    top: 555,
  },

  addressBox: 
  {
    top: 629,
  },

  nameBox: 
  {
    top: 257,
  },

  userBox: 
  {
    top: 405,
  },

  tAndCs: 
  {
    top: 805,
    left: 35,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    fontSize: FontSize.body15Regular_size,
    position: "absolute",
  },

  mandatory: 
  {
    top: 777,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    left: 85,
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    fontSize: FontSize.body15Regular_size,
    position: "absolute",
  },

  registrationPage: 
  {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
}
);

export default RegistrationPage;

