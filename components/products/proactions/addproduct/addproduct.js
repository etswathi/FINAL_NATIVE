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
import { Picker } from "native-base";

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
  const [fieldnull, setfieldnull] = useState(false);

  //   let productdetails = props.route.params;
  //   console.log(productdetails);

  //   console.log(props);

  const captureProductName = (value) => {
    setfieldnull(false);
    setproductName(value);
  };
  const captureProductDescription = (value) => {
    console.log("jiii" + value);
    setfieldnull(false);
    setproductDescription(value);
  };
  const captureProductPrice = (value) => {
    setfieldnull(false);
    setproductPrice(value);
  };
  const captureProductCategory = (value) => {
    console.log("category" + value);
    setfieldnull(false);
    setcategoryName(value);
  };
  const captureQuantity = (value) => {
    setfieldnull(false);
    setquantity(value);
  };
  const captureInStock = (value) => {
    setfieldnull(false);
    setinStock(value);
  };
  const captureProductImage = (value) => {
    console.log(value)
    setfieldnull(false);
    setproductImage(value);
  };

  const addFunction = () => {
    if (
      productName === "" ||
      productDescription === "" ||
      productPrice == "" ||
      quantity == "" ||
      categoryName == "" ||
      inStock === "" ||
      productImage === ""
    ) {
      setfieldnull(true);
    }
    if (
      productName !== "" &&
      productDescription !== "" &&
      productPrice !== "" &&
      quantity !== "" &&
      categoryName !== "" &&
      inStock !== "" &&
      productImage !== ""
    ) {
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
        .post(" http://192.168.1.39:3000/allproducts", RequestBody)
        .then((res) => {
          addProduct(res.data);
          console.log(product);
          console.log(res.data);
          setshow(true);
        });
    }
  };
  return (
    <ScrollView>
      <View style={globalstyles.containerStyle}>
        {fieldnull && (
          <View
            style={{
              width: "auto",
              height: "auto",
              border: "2px solid black",
              backgroundColor: "maroon",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
                textAlign: "center",
                fontFamily: "TimesNewRoman",
              }}
            >
              Please fill all fields
            </Text>
          </View>
        )}

        {show && (
          <View
            style={{
              width: "auto",
              height: "auto",
              borderWidth:2,
              borderColor:"black" ,
              backgroundColor: "green",
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
              Added!!!!
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "white",
                textAlign: "center",
                // fontFamily: "Times New Roman",
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
                  keyboardType={"numeric"}
                  onChangeText={captureProductPrice}
                  style={styles.textInput}
                ></TextInput>
              </View>
              {/* 
              <View style={styles.action}>
                <TextInput
                  placeholder="Product Categroy"
                  onChangeText={captureProductCategory}
                  style={styles.textInput}
                ></TextInput>
              </View> */}

              <Picker
                style={styles.action}
                onValueChange={captureProductCategory}
                selectedValue={categoryName}
                // onValueChange={(value,itemIndex)=>{captureProductCategory(value)}}
              >
                <Picker.Item label="select category" value=""></Picker.Item>
                <Picker.Item
                  label="Electronics"
                  value="Electronics"
                ></Picker.Item>
                <Picker.Item label="Dress" value="Dress"></Picker.Item>
                <Picker.Item label="Kids" value="Kids"></Picker.Item>
              </Picker>

              <View style={styles.action}>
                <TextInput
                  placeholder="Quantity"
                  keyboardType={"numeric"}
                  onChangeText={captureQuantity}
                  style={styles.textInput}
                ></TextInput>
              </View>

              <Picker
                style={styles.action}
                onValueChange={captureInStock}
                selectedValue={inStock}
                // onValueChange={(value,itemIndex)=>{captureProductCategory(value)}}
              >
                <Picker.Item label="select stock" value=""></Picker.Item>
                <Picker.Item
                  label="true"
                  value="true"
                ></Picker.Item>
                <Picker.Item label="false" value="false"></Picker.Item>
               
              </Picker>

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
    color: "#05375a",
    fontSize: 18,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
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
