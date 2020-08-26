import React from "react";
import { globalstyles } from "../../../globalstyles/globalstyles";
import { useIsFocused } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Card, Button } from "react-bootstrap";
import { Image } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { CardStyleInterpolators } from "@react-navigation/stack";
// import { Content} from "native-base";

export default function ProductsComponent({ navigation }) {
  const [products, setProducts] = useState([]);
  const [searchproducts, setsearchproducts] = useState([]);
  const [valuesearch, setvaluesearch] = useState("");
  const [search, setsearch] = useState(false);
  // setshow(true)
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log("useef");
    getAllProducts();
  }, [isFocused]);

  const getAllProducts = () => {
    axios.get(" http://192.168.1.39:3000/allproducts").then((res) => {
      console.log(res.data);
      setProducts(res.data);
      console.log(products);
      // setshow(false);
    });
  };

  const searchFunction = (value) => {
    let searchV = value;
    if (searchV === "") {
      getAllProducts();
      // this.setState({
      //   searchproducts: this.state.products,
      //   search: false,
      // });

      setsearchproducts(products);
      setsearchproducts(false);
    }
    // this.setState({ searchValue: searchV });
    setvaluesearch(searchV);
    console.log(searchV);
    let searchF = products.filter((p) => {
      console.log(p.productPrice);
      console.log(searchV);
      return (
        p.productName.toLowerCase().match(searchV.toLowerCase()) ||
        p.productPrice === parseInt(searchV)
      );
    });
    console.log(searchF);

    if (searchF) {
      console.log("search");
      // this.setState({ searchproducts: searchF, search: true });
      setsearchproducts(searchF);
      setsearch(true);
      // console.log(this.state.searchproducts);
    }
  };

  // productSelected=(id)=>{

  // }

  return (
    <ScrollView>
      <View style={globalstyles.containerStyle}>
        <TextInput
          style={styles.search}
          type="text"
          placeholder="Search Products"
          onChangeText={searchFunction}
        />
        <TouchableOpacity
          style={globalstyles.touchButtonContainer}
          onPress={() => {
            navigation.navigate("AddProduct");
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Add New Product
          </Text>
        </TouchableOpacity>

        {!search && (
          <FlatList
            //numColumns={2}
            keyExtractor={(item) => item.id}
            data={products}
            renderItem={(p) => {
              console.log(p);
              return (
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Image
                    onPress={() => {
                      navigation.navigate("ProductDetail", {
                        id: p.item.id,
                        // name: p.productName,
                        // description: p.productDescription,
                        // price: p.productPrice,
                        // category: p.categoryName,
                        // image: p.productImage,
                        // instock: p.inStock,
                        // quantity: p.quantity,
                      });
                    }}
                    source={{uri:p.item.productImage}}
                    style={{
                      width: "50%",
                      height: 100,
                      margin: 7,
                      borderRadius: 7,
                    }}
                  />

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "TimesNewRoman",
                    }}
                    onPress={() => {
                      navigation.navigate("ProductDetail", {
                        id: p.item.id,
                        name: p.item.productName,
                        description: p.item.productDescription,
                        price: p.item.productPrice,
                        category: p.item.categoryName,
                        image: p.item.productImage,
                        instock: p.item.inStock,
                        quantity: p.item.quantity,
                      });
                    }}
                    style={{
                      width: "50%",
                      textAlignVertical: "center",
                      padding: 10,
                      color: "#000",
                    }}
                  >
                    {p.item.productName}
                  </Text>
                </View>
              );
            }}
          />
        )}

        {search && (
          <FlatList
            //numColumns={2}
            keyExtractor={(item) => item.id}
            data={searchproducts}
            renderItem={(p) => {
              console.log(p);
              return (
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Image
                   source={{uri:p.item.productImage}}
                    style={{
                      width: "50%",
                      height: 100,
                      margin: 7,
                      borderRadius: 7,
                    }}
                  />

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "TimesNewRoman",
                    }}
                    onPress={() => {
                      navigation.navigate("ProductDetail", {
                        id: p.item.id,
                        name: p.item.productName,
                        description: p.item.productDescription,
                        price: p.item.productPrice,
                        category: p.item.categoryName,
                        image: p.item.productImage,
                        instock: p.item.inStock,
                        quantity: p.item.quantity,
                      });
                    }}
                    style={{
                      width: "30%",
                      textAlignVertical: "center",
                      padding: 10,
                      color: "#000",
                    }}
                  >
                    {p.item.productName}
                  </Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  search: {
    // border:"2px solid black",
    width: 150,
    borderRadius: 10,
    borderBottomColor:'black',
    borderWidth:2
  },
});
