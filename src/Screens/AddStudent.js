import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddStudent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter your Name" />
      <TextInput style={styles.input} placeholder="Enter your Class" />
      <TextInput
        style={styles.input}
        placeholder="Enter your Marks"
        keyboardType="numeric"
      />
      <TextInput style={styles.input} placeholder="Enter your Gender" />
      <View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    width: 250,
    margin: 10,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#0cb985',
    padding: 15,
    width: 100,
    margin: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
