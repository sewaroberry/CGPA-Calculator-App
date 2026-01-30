import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

const AddCourse = ({ navigation }) => {
  const {addToCourses} = useContext(AppContext);

  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [credit, setCredit] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('No');

  const handlePress = () => {
    if(title == '' || code == '' || credit == '' || grade == '') {
      setError('Yes');
    }
    
    else {
      setError('No');
      addToCourses({name: title, abrev: code, hours: Number(credit), avg: grade});
      navigation.navigate('Dashboard');
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.A]}>
        <Text style={[styles.title]}>Add Course</Text>
        <Pressable onPress={() => navigation.navigate('Dashboard')}>
          <Text style={[styles.btn]}>Back</Text>
        </Pressable>
      </View>

      <TextInput onChangeText={(txt) => setTitle(txt)} style={[styles.inputBox]} placeholder="Enter Course Title" />
      <TextInput onChangeText={(txt) => setCode(txt)} style={[styles.inputBox]} placeholder="Enter Course Code" />
      <TextInput onChangeText={(txt) => setCredit(txt)} style={[styles.inputBox]} placeholder="Enter Course Credit" />
      <TextInput onChangeText={(txt) => setGrade(txt)} style={[styles.inputBox]} placeholder="Enter Course Grade" />

      {error == 'Yes' ? <Text>You have to fill all columns!</Text> : null}

      <Pressable onPress={handlePress}>
        <Text style={[styles.btn2]}>Add Course</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    paddingTop: 70,
  },
  A: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: 'navy',
    marginBottom: 8,
  },
  btn: {
    fontSize: 20,
    fontWeight: '600',
  },
  inputBox: {
    backgroundColor: '#f5f1e7',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'navy',
    borderRadius: 10,
    marginVertical: 5,
    height: 50,
    fontSize: 16,
  },
  btn2: {
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: 'darkred',
    paddingVertical: 16,
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 5,
  }
});

export default AddCourse;