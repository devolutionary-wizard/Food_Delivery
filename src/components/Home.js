import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

import { COLOURS } from "../database/items";
import { Categories } from "../database/items";

const Home = ({ navigation }) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}
      >
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}
        >
          <View style={{ width: 60, height: 60 }}>
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%", resizeMode: "center" }}
            />
          </View>
          <Text
            style={{ fontSize: 16, color: COLOURS.black, fontWeight: "600" }}
          >
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.accent,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="angle-right"
              size={12}
              style={{
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        onPress={() =>
          navigation.push("detail", {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
          })
        }
        style={{
          width: "100%",
          height: 180,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: 160,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: "relative",
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginBottom: 50 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: data.isTopOfTheWeek ? "flex" : "none",
              }}
            >
              <FontAwesome name="crown" size={10} color={COLOURS.accent} />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  opacity: 0.8,
                  marginLeft: 5,
                }}
              >
                top of the week
              </Text>
            </View>
            <Text
              style={{ fontSize: 22, color: COLOURS.black, fontWeight: "bold" }}
            >
              {data.name}
            </Text>
            <Text style={{ fontSize: 12, color: COLOURS.black, opacity: 0.5 }}>
              {data.weight}
            </Text>
          </View>
          <View style={{ width: 150, height: 150, marginRight: -45 }}>
            <Image
              source={data.image}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 85,
                height: 50,
                backgroundColor: COLOURS.accent,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="plus" size={18} color={COLOURS.black} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <AntDesign
                name="star"
                size={12}
                color={COLOURS.black}
                style={{ paddingRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.black,
                  fontWeight: "bold",
                }}
              >
                {data.rating}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{ width: "100%", height: "100%", backgroundColor: COLOURS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: COLOURS.white,
            position: "relative",
          }}
        >
          <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
          <Image
            source={require("../database/images/background.png")}
            style={{ position: "absolute", top: 0, left: -100 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <TouchableOpacity style={{ width: 40, height: 40 }}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/286c608f-6b73-4e8a-a89f-fd5a3da764f2",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="segment"
                style={{ color: COLOURS.black }}
                size={28}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.5,
                fontWeight: "400",
              }}
            >
              Food
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: COLOURS.black,
                fontWeight: "600",
                letterSpacing: 2,
              }}
            >
              Delivery
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="search"
              style={{ opacity: 0.8, color: COLOURS.black }}
              size={28}
            />
            <TextInput
              placeholder="Search......"
              style={{
                color: COLOURS.black,
                fontSize: 16,
                paddingVertical: 5,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black + 20,
                width: "90%",
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: "700",
              color: COLOURS.black,
              letterSpacing: 1,
            }}
          >
            Categories
          </Text>
          <FlatList
            data={Categories}
            horizontal={true}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: "700",
              color: COLOURS.black,
            }}
          >
            Popular
          </Text>
          {Categories[currentSelected].items.map(renderItems)}
          <TouchableOpacity
            style={{
              margin: 30,
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.5,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black,
              }}
            >
              Load More
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
