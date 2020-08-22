import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Forms from "../components/formComponent";
import { ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { fetch } from "cross-fetch";
import baseurl from "../shared/baseurl";
import Context from "../shared/context";

function Listdata({ data, navi }) {
  const listitems = data.map((item) => {
    return (
      <TouchableOpacity
        key={item._id.toString()}
        onPress={() => navi.navigate("Reviews", item)}
      >
        <ListItem
          key={item._id.toString()}
          title={item.title}
          leftIcon={() => <Ionicons name="md-paper" size={32} color="black" />}
          bottomDivider
          chevron
        />
      </TouchableOpacity>
    );
  });
  return listitems;
}

export default function Home(props) {
  const { globalstate, dispatchglobalstate } = useContext(Context);
  const [state, setState] = useState({ openmodal: false });
  useEffect(() => {
    const ac = new AbortController();
    fetch(baseurl.databaseurl + "addreview", { signal: ac.signal })
      .then((res) => {
        if (res.ok) {
          return res;
        }
      })
      .then((res) => res.json())
      .then((Response) => {
        if (Response.success) {
          console.log("data fetched");
          dispatchglobalstate({ type: "LOADED", payload: Response.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => ac.abort();
  }, []);
  const formsubmit = (values) => {
    const ac = new AbortController();
    fetch(baseurl.databaseurl + "addreview", {
      method: "POST",
      signal: ac.signal,
      body: JSON.stringify({
        title: values.title,
        rating: values.rating,
        des: values.des,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((res) => {
        if (res.ok) {
          return;
        } else {
          alert("Cant't add");
        }
      })
      .catch((error) => {
        alert("Cant't Add");
      });
    dispatchglobalstate({
      type: "ADD_REVIEW",
      payload: {
        title: values.title,
        rating: values.rating,
        des: values.des,
        _id: Math.random(),
      },
    });
    alert("Added your Review");
    return () => ac.abort();
  };
  if (globalstate.isloading) {
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      </>
    );
  } else if (globalstate.data != []) {
    return (
      <View>
        <Modal visible={state.openmodal}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginBottom: 20,
                    marginTop: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Add Your Review Here !!
                </Text>
              </View>
              <Forms formsubmit={formsubmit}></Forms>
              <View style={{ margin: 10, marginTop: 1 }}>
                <TouchableOpacity
                  onPress={() => setState({ openmodal: false })}
                >
                  <View
                    style={{
                      padding: 20,
                      backgroundColor: "#F70910",
                      borderRadius: 6,
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Go Back
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <ScrollView>
          <Listdata data={globalstate.data} navi={props.navigation} />
          <View style={{ backgroundColor: "#fff", color: "000", padding: 20 }}>
            <Button
              title="Add Review"
              onPress={() => setState({ openmodal: true })}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
