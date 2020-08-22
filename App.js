import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./components/homeComponent";
import Review from "./components/reviewdetailComponent";
import About from "./components/aboutComponent";
import Header from "./components/header";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import GlobalProvider from "./shared/globalprovider";
function Customcomp(props) {
  return (
    <ScrollView>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <View>
          <View>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                margin: 25,
              }}
            >
              Reviewers Ground !
            </Text>
          </View>
          <View style={{ borderRadius: 9 }}>
            <ImageBackground
              style={{ width: "100%", height: 200 }}
              source={require("./assets/animation.png")}
            />
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
        };
      },
    },
    Reviews: {
      screen: Review,
      navigationOptions: {
        title: "",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#3F57DF" },
    },
  }
);

const AboutStack = createStackNavigator(
  {
    Home1: {
      screen: About,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#3F57DF" },
    },
  }
);

const HomeDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: () => (
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              padding: 15,
            }}
          >
            Home
          </Text>
        ),
        drawerIcon: () => <Ionicons name="md-home" size={32} color="white" />,
      },
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        drawerLabel: () => (
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              padding: 15,
            }}
          >
            About
          </Text>
        ),
        drawerIcon: () => <Ionicons name="md-help" size={32} color="white" />,
      },
    },
  },
  {
    drawerBackgroundColor: "#4287f5",
    contentComponent: Customcomp,
  }
);

const Navcontainer = createAppContainer(HomeDrawer);

export default function App() {
  const [fontloaded] = useFonts({
    font1: require("./shared/Lexend_Zetta/LexendZetta-Regular.ttf"),
  });

  if (!fontloaded) {
    return <AppLoading></AppLoading>;
  } else {
    return (
      <GlobalProvider>
        <Navcontainer></Navcontainer>
      </GlobalProvider>
    );
  }
}

const gstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "font1",
  },
});
