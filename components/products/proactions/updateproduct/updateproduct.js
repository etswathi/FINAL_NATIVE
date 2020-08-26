import React from "react";
import { globalstyles } from "../../../../globalstyles/globalstyles";
import { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Picker
} from "react-native";
import { Card, Button } from "react-bootstrap";
import { Image } from "react-native";
import axios from "axios";

// import { Content} from "native-base";

export default function UpdateProductComponent(props) {
  console.log(props);
  const [show, setshow] = useState(false);

  // console.log(protoupdate);
  const [productName, setproductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [quantity, setquantity] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [inStock, setinStock] = useState("");
  const [productImage, setproductImage] = useState("");
  const [product, addProduct] = useState([]);
  const [productstate, updateProduct] = useState([]);

  useEffect(() => {
    // let protoupdate = props.route.params;
    setproductName(props.route.params.name),
      setproductDescription(props.route.params.description),
      setproductPrice(
        props.route.params.price,
        setquantity(props.route.params.quantity),
        setcategoryName(props.route.params.category),
        setinStock(props.route.params.instock),
        setproductImage(props.route.params.image)
      );
  }, []);
  //   updateProduct({
  //     name: protoupdate.name,
  //   });

  //   let productdetails = props.route.params;
  //   console.log(productdetails);

  //   console.log(props);

  const captureProductName = (value) => {
    // setshow(false)
    setproductName(value);
  };
  const captureProductDescription = (value) => {
    // setshow(false)
    setproductDescription(value);
  };
  const captureProductPrice = (value) => {
    // setshow(false)
    setproductPrice(value);
  };
  const captureProductCategory = (value) => {
    // setshow(false)
    setcategoryName(value);
  };
  const captureQuantity = (value) => {
    // setshow(false)
    setquantity(value);
  };
  const captureInStock = (value) => {
    // setshow(false)
    setinStock(value);
  };
  const captureProductImage = (value) => {
    // setshow(false)
    setproductImage(value);
  };

  const updateFunction = () => {
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
      .put(
        "http://192.168.1.39:3000/allproducts/" + props.route.params.id,
        RequestBody
      )
      .then((res) => {
        console.log(res.data);
        setshow(true);
        console.log("update");
        setTimeout(() => {
          props.navigation.navigate("Products");
        }, 1000);
      });
  };
  return (
    <ScrollView>
      {show && (
        <View
          style={{
            width: "auto",
            height: "auto",
            borderWidth:2,
            borderColor:'black',
            backgroundColor: "green",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              textAlign: "center",
              // fontFamily:"Times New Roman",
            }}
          >
            Updated!!!!
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              textAlign: "center",
              // fontFamily: "Times New Roman",
            }}
          >
            Product Successfully updated
          </Text>
        </View>
      )}

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
              value={productName}
            ></TextInput>
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Product Description"
              onChangeText={captureProductDescription}
              style={styles.textInput}
              value={productDescription}
            ></TextInput>
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Product Price"
              keyboardType={"numeric"}
              // numeric value
              // keyboardType={'numeric'}
              onChangeText={captureProductPrice}
              
              style={styles.textInput}
              value={productPrice}
            ></TextInput>
          </View>

          <Picker
                style={styles.action}
                onValueChange={captureProductCategory}
                value={categoryName}
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
              //                 numeric value
                keyboardType={'numeric'}
              onChangeText={captureQuantity}
              style={styles.textInput}
              value={quantity}
            ></TextInput>
          </View>

          <Picker
                style={styles.action}
                value={inStock}
                selectedValue={inStock}
                onValueChange={captureInStock}
                // onValueChange={(value,itemIndex)=>{captureProductCategory(value)}}
              > 
              {/* <Picker.Item  value={inStock}></Picker.Item> */}
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
              value={productImage}
            ></TextInput>
          </View>
          <TouchableOpacity
            onPress={updateFunction}
            style={globalstyles.touchButtonContainer}
          >
            <Text>Update</Text>
          </TouchableOpacity>
        </View>

       
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
