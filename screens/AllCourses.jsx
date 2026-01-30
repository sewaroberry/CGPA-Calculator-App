import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import Card from "../components/Card";

const AllCourses = ({navigation}) => {
  const {courses} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={[styles.A]}>
        <Text style={[styles.title]}>All Courses</Text>
        <Pressable onPress={() => navigation.navigate('Dashboard')}>
          <Text style={[styles.btn]}>Back</Text>
        </Pressable>
      </View>

      {courses.length == 0? <Text style={[styles.B]}>No Courses Enrolled Yet</Text> : 
        <ScrollView>
          {
            courses.map((obj) => <Card product={obj} />)
          }
        </ScrollView>
      }

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
    fontSize: 30,
    fontWeight: '700',
    color: 'navy',
    marginBottom: 8,
  },
  btn: {
    fontSize: 20,
    fontWeight: '600',
  },
  B: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  }
});

export default AllCourses;
