import { StyleSheet } from "react-native";
import background from "../assets/download.jpg";

export const globalstyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  containerStyle: {
    padding: 20,
    
    flex: 1,
  },
  touchButtonContainer: {
    backgroundColor: "#00AF87",
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "red",
  },
  button: {
    marginRight: 10,
  },
});
