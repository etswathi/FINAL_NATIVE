import React from "react";
import { globalstyles } from "../../../../globalstyles/globalstyles";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-bootstrap";
import { Image } from "react-native";
import Axios from "axios";

// import { Content} from "native-base";

export default function AddProductComponent(props) {
  const [productName, setproductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [quantity, setquantity] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [inStock, setinStock] = useState("");
  const [productImage, setproductImage] = useState("");
  const [product, addProduct] = useState([]);
  const [show, setshow] = useState(false);

  //   let productdetails = props.route.params;
  //   console.log(productdetails);

  //   console.log(props);

  const captureProductName = (value) => {
    setproductName(value);
  };
  const captureProductDescription = (value) => {
    setproductDescription(value);
  };
  const captureProductPrice = (value) => {
    setproductPrice(value);
  };
  const captureProductCategory = (value) => {
    setcategoryName(value);
  };
  const captureQuantity = (value) => {
    setquantity(value);
  };
  const captureInStock = (value) => {
    setinStock(value);
  };
  const captureProductImage = (value) => {
    setproductImage(value);
  };

  const addFunction = () => {
    let RequestBody = {
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      quantity: quantity,
      categoryName: categoryName,
      inStock: inStock,
      productImage: productImage,
    };

    axios
      .post("http://localhost:3000/allproducts/", RequestBody)
      .then((res) => {
        addProduct(res.data);
        console.log(product);
        console.log(res.data);
        setshow(true);
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
              border: "2px solid black",
              backgroundColor: "green",
            }}
          >
            <Text
              style={{
                fontSize: "30px",
                color: "white",
                textAlign: "center",
                fontFamily: "TimesNewRoman",
              }}
            >
              Added!!!!
            </Text>
            <Text
              style={{
                fontSize: "25px",
                color: "white",
                textAlign: "center",
                fontFamily: "TimesNewRoman",
              }}
            >
              Product Successfully added
            </Text>
          </View>
        )}

        {!show && (
          <View>
           
            <View style={styles.footer}>
            {/* <View style={styles.header}> */}
             {/* <Image source={require('../assets/download.jpg')} style={styles.logo} resizeMode="stretch"></Image>  */}
             {/* <Text style={styles.text_header}>Welcome</Text> */}
            {/* </View> */}
              
              <View style={styles.action}>
                <TextInput
                  placeholder="Product Name"
                  onChangeText={captureProductName}
                  style={styles.textInput}
                ></TextInput>
              </View>
              
              <View style={styles.action}>
                <TextInput
                  placeholder="Product Description"
                  onChangeText={captureProductDescription}
                  style={styles.textInput}
                ></TextInput>
              </View>
            
              <View style={styles.action}>
                <TextInput
                  placeholder="Product Price"
                  // numeric value
                  // keyboardType={'numeric'}
                  onChangeText={captureProductPrice}
                  style={styles.textInput}
                ></TextInput>
              </View>
            
              <View style={styles.action}>
                <TextInput
                  placeholder="Product Categroy"
                  onChangeText={captureProductCategory}
                  style={styles.textInput}
                ></TextInput>
              </View>
             
              <View style={styles.action}>
                <TextInput
                  placeholder="Quantity"
                  
                    keyboardType={'numeric'}
                  onChangeText={captureQuantity}
                  style={styles.textInput}
                ></TextInput>
              </View>
              
              <View style={styles.action}>
                <TextInput
                  placeholder="In Stock"
                  onChangeText={captureInStock}
                  style={styles.textInput}
                ></TextInput>
              </View>
             
              <View style={styles.action}>
                <TextInput
                  placeholder="Image"
                  onChangeText={captureProductImage}
                  style={styles.textInput}
                ></TextInput>
              </View>
              <TouchableOpacity
                onPress={addFunction}
                style={globalstyles.touchButtonContainer}
              >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      
      </View>
    </ScrollView>
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
    backgroundColor: "#00AF87",
    borderRadius: 30,
    paddingVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderRadius: 30,
   
    paddingVertical: 90,
    paddingHorizontal: 40,
    
  },
});
