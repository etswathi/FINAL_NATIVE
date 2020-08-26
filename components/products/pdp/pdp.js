import React from "react";
import { globalstyles } from "../../../globalstyles/globalstyles";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { Image } from "react-native";
import axios from "axios";

// import { Content} from "native-base";

export default function PdpComponent(props) {
  const [show, setshow] = useState(false);
  const [stock, setstock] = useState(false);

  let productdetails = props.route.params;

  useEffect(() => {
    if (productdetails.instock === "true") {
      setstock(true);
    }
    if (productdetails.instock === "false") {
      setstock(false);
    }
  }, []);

  console.log(productdetails);

  console.log(props);

  const deleteFunction = (event) => {
    event.preventDefault();
    axios
      .delete("http://192.168.1.39:3000/allproducts/" + productdetails.id)
      .then((res) => {
        console.log(res);
        setshow(true);

        // props.navigation('Products')
      });
  };

  return (
    <ScrollView>
      <View style={globalstyles.containerStyle}>
        {show && (
          <View
            style={{
              width: "auto",
              height: "auto",
              borderColor: "black",
              borderWidth: 2,
              backgroundColor: "maroon",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "white",
                textAlign: "center",
                // fontFamily: "Times New Roman",
              }}
            >
              Deleted!!!!
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "white",
                textAlign: "center",
                // fontFamily: "Times New Roman",
              }}
            >
              Product Successfully deleted
            </Text>
          </View>
        )}

        {!show && (
         <View>
          <Text style={styles.title}>{productdetails.name}</Text> 

            <View
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                width: "auto",
                margin: "auto",
                textAlign: "center",
                fontFamily: "arial",
                borderRadius: 20,
                paddingBottom: 30,
                paddingHorizontal: 30,
                justifyContent: "center",
                // marginRight:'10px',
                // marginRight:'10px'
              }}
            >
              <Image
                source={{uri:productdetails.image}}
                style={{ width: "100%", height: 200 }}
              />
              
              

              <Text
                style={{ color: "black", fontSize: 22, fontWeight: "bold" }}
              >
                ${productdetails.price}
              </Text>
              <Text>{productdetails.description}</Text>
              <Text>Category:{productdetails.category}</Text>
              <Text>Quantity:{productdetails.quantity}</Text>
              {stock && <Text style={{ fontWeight: "bold" }}>In Stock</Text>}
              {!stock && (
                <Text style={{ fontWeight: "bold" }}>Out of Stock</Text>
              )}

              
                <TouchableOpacity
                  style={globalstyles.touchButtonContainer}
                  onPress={() => {
                    props.navigation.navigate("UpdateProduct", {
                      id: productdetails.id,
                      name: productdetails.name,
                      description: productdetails.description,
                      price: productdetails.price,
                      category: productdetails.category,
                      image: productdetails.image,
                      instock: productdetails.instock,
                      quantity: productdetails.quantity,
                    });
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalstyles.touchButtonContainer}
                  onPress={deleteFunction}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Delete
                  </Text>
                </TouchableOpacity>
            
            </View>
            </View> 
       )} 
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
