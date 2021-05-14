import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";

import firebase from "../../core/services/database/firebase";

interface InitialData {
  name: string;
  document: string;
  type: string;
}

const initialData = {
  name: "",
  document: "",
  type: "individual",
};

const FormUser: React.FC = () => {
  const [users, setUsers] = useState<InitialData>(initialData);

  const handleChangeInput = (name: string, value: string) => {
    setUsers({ ...users, [name]: value });
  };

  const addNewUser = async () => {
    if (users.name === "") {
      console.log("campo obrigatório");
    } else {
      await firebase.db.collection("users").add({
        name: users.name,
        document: users.document,
        type: users.type,
      });
    }
    setUsers(initialData);
  };

  return (
    <View style={styles.container}>
      <View>
        <RadioButton.Group
          onValueChange={(value) => setUsers({ ...users, type: value })}
          value={users.type}
        >
          <RadioButton.Item label="Pessoa física" value="individual" />
          <RadioButton.Item label="Pessoa juridica" value="business" />
        </RadioButton.Group>
      </View>
      <View>
        <TextInput
          value={users.name}
          onChangeText={(value) => handleChangeInput("name", value)}
          style={styles.inputText}
          placeholder="Nome completo"
        />
      </View>
      <View>
        <TextInput
          value={users.document}
          onChangeText={(value) => handleChangeInput("document", value)}
          style={styles.inputText}
          placeholder="Nome completo"
        />
      </View>
      <TouchableHighlight onPress={() => addNewUser()}>
        <View style={styles.button}>
          <Text style={styles.textBtn}>Enviar</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 13,
    marginTop: 10,
  },

  inputText: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    marginBottom: 10,
    padding: 7,
  },
});
export default FormUser;
