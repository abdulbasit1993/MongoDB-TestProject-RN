import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddStudent = ({navigation}) => {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [marks, setMarks] = useState('');
  const [gender, setGender] = useState('');

  //   console.log('Name ------> ', name);
  //   console.log('Class ------> ', studentClass);
  //   console.log('Marks ------> ', marks);
  //   console.log('Gender ------> ', gender);

  const SERVER_URL = 'http://172.16.203.168';

  const submitStudentData = () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        class: studentClass,
        marks: marks,
        gender: gender,
      }),
    };
    fetch(`${SERVER_URL}:3000/add_student`, requestOptions)
      .then(response => response.json())
      .catch(error => console.error(error))
      .finally(() => alert('Student data added succesfully!'));
    navigation.navigate('MongoDBTest');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Class"
        value={studentClass}
        onChangeText={value => setStudentClass(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Marks"
        keyboardType="numeric"
        value={marks}
        onChangeText={value => setMarks(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Gender"
        value={gender}
        onChangeText={value => setGender(value)}
      />
      <View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => submitStudentData()}>
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
