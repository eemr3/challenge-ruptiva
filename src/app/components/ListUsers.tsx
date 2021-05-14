import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { List, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

import firebase from "../../core/services/database/firebase";

interface ListUsers {
  id: string;
  name: string;
  document: string;
  type: string;
}

const ListUsers: React.FC = () => {
  const [users, setUsers] = useState<ListUsers[]>([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            document: doc.data().document,
            type: doc.data().type,
          };
        })
      );
    });
  }, []);

  const handleDelete = (id: string) => {
    firebase.db
      .collection("users")
      .doc(id)
      .delete()
      .then((res) => {
        console.log("Deleted! ", res);
      });
  };

  const openConfirmationAlert = (id: string) => {
    Alert.alert("Remover usuário", "", [
      { text: "Sim", onPress: () => handleDelete(id) },
      { text: "No", onPress: () => console.log(false) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Usuários</Text>
      {users.map((user) => {
        return (
          <List.Item
            titleStyle={
              user.type === "individual"
                ? styles.textListInd
                : styles.textListBus
            }
            key={user.id}
            title={user.name}
            description={user.document}
            style={styles.textList}
            right={(props) => (
              <View>
                <Button
                  style={{ marginBottom: 5 }}
                  color="#DDDDDD"
                  mode="contained"
                  onPress={() => handleDelete(user.id)}
                >
                  <FontAwesome name="trash-o" size={24} color="black" />
                </Button>
              </View>
            )}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  textTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "center",
    textTransform: "uppercase",
  },
  textList: {
    flexWrap: "wrap",
    backgroundColor: "#e5e5e5",
    marginBottom: 5,
    padding: 10,
    width: "90%",
  },
  textListInd: {
    color: "#ff6a00",
  },
  textListBus: {
    color: "#00b2ff",
  },
});
export default ListUsers;
