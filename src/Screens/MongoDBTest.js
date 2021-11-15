import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const SERVER_URL = 'http://172.16.203.168';

const MongoDBTest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}:3000/students`)
      .then(response => response.json())
      .then(json => {
        console.log('data ---->', json);
        setData(json);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MongoDB Test Screen</Text>
      <Text style={styles.subHeading}>Data output from database:</Text>

      {data.length === 0 ? (
        <View style={styles.noData}>
          <Text style={styles.noDataText}>No data found...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    color: '#ffffff',
    backgroundColor: 'green',
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  subHeading: {
    color: '#ffffff',
    backgroundColor: 'purple',
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  noData: {
    flex: 1,
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
    margin: 12,
    padding: 15,
  },
  dataText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MongoDBTest;
