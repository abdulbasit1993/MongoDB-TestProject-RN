import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const SERVER_URL = 'http://172.16.203.168';

const MongoDBTest = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}:3000/students`)
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
        alert('An error occured: ' + error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('AddStudent')}>
          <Text style={styles.btnText}>Add Student</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, padding: 15}}>
        <Text style={styles.heading}>Data output from database:</Text>

        {data.length === 0 ? (
          <View style={styles.noData}>
            <Text style={styles.noDataText}>No data found...</Text>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            data={data}
            ItemSeparatorComponent={() => <View style={{marginBottom: 15}} />}
            renderItem={({item}) => (
              <View style={styles.dataItem}>
                <Text style={styles.dataText}>Name: {item.name}</Text>
                <Text style={styles.dataText}>Class: {item.class}</Text>
                <Text style={styles.dataText}>Marks: {item.marks}</Text>
                <Text style={styles.dataText}>Gender: {item.gender}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    color: '#ffffff',
    backgroundColor: 'purple',
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  noData: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 18,
    backgroundColor: 'red',
    color: '#fff',
    padding: 15,
  },
  dataItem: {
    backgroundColor: '#5630ff',
    // margin: 10,
    padding: 15,
  },
  dataText: {
    color: '#fff',
    fontSize: 18,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#0cb985',
    padding: 12,
    width: 150,
    margin: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default MongoDBTest;
