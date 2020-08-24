import React from "react";
import { globalstyles } from "../../globalstyles/globalstyles";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeComponent({ navigation }) {
  return (
    <View style={globalstyles.containerStyle}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/logoo.jpg")}
          style={styles.logo}
          resizeMode="stretch"
        ></Image>
        {/* <Text style={styles.text_header}>Welcome</Text> */}
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Inventory.com</Text>
        <Text style={styles.text}>
          Welcome to the world of product management!!!
        </Text>
        <TouchableOpacity
          style={globalstyles.touchButtonContainer}
          onPress={() => {
            navigation.navigate("Products");
          }}
        >
          <Text style={{color:'white',fontWeight:'bold'}}>Go To Products Screen</Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={globalstyles.textStyle}>I am at home!</Text> */}

      {/* <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('Products')}}      >
                <Text>Go To Products Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('Base')}}      >
                <Text>Go To Products Screen</Text>
            </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  focus: {
    borderColor: "green",
  },
  text_footer: {
    color: "05375a",
    fontSize: 18,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    onhover: "none",
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //   backgroundColor: "#00AF87",
    borderRadius: 30,
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: 30,

    paddingVertical: 70,
    paddingHorizontal: 30,
    marginTop:50
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
});
