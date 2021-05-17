import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import firebase from "../../core/services/database/firebase";
import { Formik, useFormik } from "formik";

import { CpfCnpj } from "../../utils/FormatHandleChangeInput";

import { formValidation } from "../../utils/yup";

import Button from "./Button";

const initialData = {
  name: "",
  document: "",
  type: "individual",
};

const FormUser: React.FC = () => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      document: "",
      type: "individual",
    },
    validationSchema: formValidation,
    onSubmit: async (values, { resetForm }) => {
      await firebase.db.collection("users").add({
        name: values.name,
        document: CpfCnpj(values.type, values.document),
        type: values.type,
      });
      resetForm({ values: initialData });
    },
  });

  return (
    <>
      <View>
        <RadioButton.Group
          onValueChange={handleChange("type")}
          value={values.type}
        >
          <RadioButton.Item label="Pessoa física" value="individual" />
          <RadioButton.Item label="Pessoa juridica" value="business" />
        </RadioButton.Group>
      </View>
      <View style={styles.container}>
        <View>
          {!isSubmitting ? (
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              placeholder="Nome completo"
              value={values.name}
              style={styles.inputText}
            />
          ) : (
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              placeholder="Nome completo"
              value={values.name}
              style={styles.inputText}
              editable={false}
            />
          )}
          {errors.name ? (
            <View>
              <Text style={styles.errorField}>{errors.name}</Text>
            </View>
          ) : null}
        </View>
        <View>
          {!isSubmitting ? (
            <TextInputMask
              type={values.type === "individual" ? "cpf" : "cnpj"}
              value={values.document}
              style={styles.inputText}
              onChangeText={handleChange("document")}
              placeholder={
                values.type === "individual"
                  ? "Número do CPF"
                  : "Número do CNPJ"
              }
            />
          ) : (
            <TextInputMask
              type={"cpf"}
              value={values.document}
              style={styles.inputText}
              onChangeText={handleChange("document")}
              placeholder="Numero do CPF"
              editable={false}
            />
          )}
          {errors.document ? (
            <View>
              <Text style={styles.errorField}>{errors.document}</Text>
            </View>
          ) : null}
        </View>
        <Button
          onPress={handleSubmit}
          isLoading={isSubmitting}
          label="Enviar"
        />
      </View>
    </>
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
    fontSize: 18,
  },

  errorField: {
    color: "#d62828",
  },

  radioText: {
    fontSize: 30,
  },
});

export default FormUser;
