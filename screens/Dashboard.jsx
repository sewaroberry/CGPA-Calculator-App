import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const min = (a, b) => {
  if(a < b) return a;
  else return b;
}

const Dashboard = ({ navigation }) => {
  const {courses, calcGPA, calcCredits} = useContext(AppContext);

  const x = calcGPA();
  const y = calcCredits();

  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Sewar Wazwaz</Text>
      <Text style={[styles.subTitle]}>Hebron University CGPA Tracker</Text>

      <View style={[styles.box1]}>
        <Text style={[styles.A]}>Total Average</Text>
        <Text style={[styles.B]}>{x}</Text>

        <View style={[styles.C]}>
          <View style={[styles.F]}>
            <Text style={[styles.D]}>Total Courses</Text>
            <Text style={[styles.E]}>{courses.length}</Text>
          </View>
          <View style={[styles.F]}>
            <Text style={[styles.D]}>Total Credit</Text>
            <Text style={[styles.E]}>{y}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.G]}>
        <Pressable onPress={() => navigation.navigate('AddCourse')} style={[styles.btn, styles.btn1]}>
          <Text style={[styles.txt]}>+</Text>
          <Text style={[styles.txt]}>Add Course</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AllCourses')} style={[styles.btn, styles.btn2]}>
          <Text style={[styles.txt]}>All</Text>
          <Text style={[styles.txt]}>View Courses</Text>
        </Pressable>
      </View>

      <Text style={[styles.H]}>Recent Courses</Text>

      {courses.length == 0? <Text style={[styles.I]}>No Courses Enrolled Yet</Text> : 
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
    backgroundColor: 'white',
    flex: 1,
    padding: 24,
    paddingTop: 70,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'darkred',
  },
  subTitle: {
    fontSize: 17,
    marginBottom: 12,
    marginTop: 4,
  },
  box1: {
    backgroundColor: 'navy',
    padding: 22,
    borderRadius: 12,
  },
  A: {
    fontSize: 18,
    color: 'beige',
    marginBottom: 4,
  },
  B: {
    fontSize: 44,
    fontWeight: '700',
    color: 'beige',
    marginBottom: 10,
  },
  C: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  D: {
    fontSize: 16,
    color: 'beige',
    paddingVertical: 6,
  },
  E: {
    fontSize: 16,
    color: 'beige',
  },
  F: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  G: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 8,
  },
  btn: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
  },
  btn1: {
    backgroundColor: 'darkred',
  },
  btn2: {
    backgroundColor: '#d1c5a2',
  },
  txt: {
    color: 'white',
    fontWeight: '500',
    marginBottom: 3,
    fontSize: 18,
  },
  H: {
    fontSize: 26,
    fontWeight: '700',
    color: 'navy',
    marginVertical: 7,
  },
  I: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  }
});
export default Dashboard;
