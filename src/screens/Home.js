import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('http://10.0.2.2:5000/articles');
  //     const res1 = await res.json();
  //     console.log('res1 ' + res1);
  //     setData(res1)
  //   };
  //   getData();
  // }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      {/* {data.map(ele => {
        return <Text>{ele.authorname}</Text>
      })} */}

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={{color: 'red'}}>Goto Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
