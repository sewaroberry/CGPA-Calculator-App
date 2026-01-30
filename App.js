import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./screens/Dashboard";
import AddCourse from "./screens/AddCourse";
import AllCourses from "./screens/AllCourses";
import AppContext from "./context/AppContext";
import {useState} from "react";

const Stack = createNativeStackNavigator();

const max = (a, b) => {
  if(a < b) return b;
  else return a;
}

export default function App() {
  const [courses, setCourses] = useState([]);
  
  const [cnt, setCnt] = useState(1);
  
  const addToCourses = (obj) => {
    setCourses([...courses, {id: cnt, ...obj}]);
    setCnt(cnt + 1);
  }

  const calcGPA = () => {
    let x = 0.00;
    let sum = 0;
    for(let i = 0; i < courses.length; i++) {
      x += courses[i].hours * courses[i].avg;
      sum += courses[i].hours;
    }

    if(sum > 0) return (x / sum).toFixed(2);
    else return 0.00;
  }

  const deleteCourse = (id) => {
    let newCourses = [];
    
    for(let i = 0; i < courses.length; i++) {
      if(courses[i].id == id) continue;
      else newCourses = [...newCourses, courses[i]];
    }

    setCourses(newCourses);
  }

  const calcCredits = () => {
    let sum = 0;
    for(let i = 0; i < courses.length; i++) {
      sum += courses[i].hours;
    }
    return sum;
  }

  const value = {courses, addToCourses, calcGPA, deleteCourse, calcCredits};

  return (
    <AppContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AddCourse" component={AddCourse} />
          <Stack.Screen name="AllCourses" component={AllCourses} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
