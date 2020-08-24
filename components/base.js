import React from "react";
import { globalstyles } from "../globalstyles/globalstyles";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
} from "native-base";
import { TextInput } from "react-native-gesture-handler";

export default function BaseComponent({ navigation }) {
  const details = {
    name: "OBB",
    location: "Chennai",
    id: "1",
  };

  return (
    <View style={globalstyles.containerStyle}>
      <View style={styles.header}>
        {/* <Image source={require('../assets/download.jpg')} style={styles.logo} resizeMode="stretch"></Image> */}
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput autoCapitalize='none' placeholder="enter" style={styles.textInput}></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    focus:{
        borderColor:'green'
    },
  text_footer: {
    color: "05375a",
    fontSize: 18,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    onhover:'none'
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
    backgroundColor: "#00AF87",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderRighttRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 40,
  },
});
