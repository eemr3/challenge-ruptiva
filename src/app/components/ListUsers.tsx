import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { TextMask } from "react-native-masked-text";
import { ListItem, Avatar, Icon } from "react-native-elements";

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
    firebase.db
      .collection("users")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
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
    <ScrollView>
      <Text style={styles.textTitle}>Usuários</Text>

      {users.map((user) => {
        return (
          <ListItem key={user.id} bottomDivider>
            <ListItem.Content>
              <ListItem.Title
                style={
                  user.type === "individual"
                    ? styles.textListInd
                    : styles.textListBus
                }
              >
                {user.name}
              </ListItem.Title>
              <ListItem.Subtitle>
                {user.type === "individual" ? (
                  <TextMask
                    value={user.document}
                    type={"cpf"}
                    options={{
                      obfuscated: true,
                    }}
                  />
                ) : (
                  <TextMask
                    value={user.document}
                    type={"cnpj"}
                    options={{
                      obfuscated: true,
                    }}
                  />
                )}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Icon
              name="trash"
              type="font-awesome"
              onPress={() => handleDelete(user.id)}
            />
          </ListItem>
          // <View key={user.id} style={styles.textList}>
          //   <Text
          //     style={
          //       user.type === "individual"
          //         ? styles.textListInd
          //         : styles.textListBus
          //     }
          //   >
          //     {user.name}
          //   </Text>
          //   {user.type === "individual" ? (
          //     <TextMask
          //       value={user.document}
          //       type={"cpf"}
          //       options={{
          //         obfuscated: true,
          //       }}
          //     />
          //   ) : (
          //     <TextMask
          //       value={user.document}
          //       type={"cnpj"}
          //       options={{
          //         obfuscated: true,
          //       }}
          //     />
          //   )}

          //   <FontAwesome
          //     name="trash-o"
          //     size={24}
          //     color="black"
          //     onPress={() => handleDelete(user.id)}
          //     style={{ padding: 10 }}
          //   />
          // </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  textListInd: {
    fontSize: 16,
    color: "#ff6a00",
    marginBottom: 2,
  },

  textListBus: {
    fontSize: 16,
    color: "#00b2ff",
    marginBottom: 2,
  },
});

export default ListUsers;
