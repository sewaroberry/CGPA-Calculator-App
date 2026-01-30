import { Pressable, StyleSheet, Text, View } from "react-native";
import AppContext from "../context/AppContext";
import {useContext} from "react";

const Card = (props) => {
    const fontColor = (props.product.avg < 60? styles.fnt1: styles.fnt2);

    const {deleteCourse} = useContext(AppContext);

    return <View style={[styles.container]}>
        <View style={[styles.A]}>
            <Text style={[styles.B]}>{props.product.name}</Text>
            <Text style={[styles.C]}>Credit: {props.product.hours}</Text>
        </View>
        <View style={[styles.E]}>
            <Text style={[styles.D, fontColor]}>{props.product.avg}</Text>
            <Pressable style={[styles.G]} onPress={() => deleteCourse(props.product.id)}>
                <Text style={[styles.F]}>x</Text>
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4e9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        marginVertical: 5,
    },
    A: {
        gap: 6,
    },
    B: {
        fontSize: 16,
        color: 'navy',
        fontWeight: '700',
    },
    C: {
        fontSize: 14,
        color: 'gray',
    },
    D: {
        fontSize: 22,
        fontWeight: '700',
    },
    E: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    F: {
        // backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 3,
        paddingHorizontal: 9,
    },
    fnt1: {
        color: 'red',
    },
    fnt2: {
        color: 'green',
    }, 
    G: {
        backgroundColor: 'darkred',
        width: 30,
        paddingVertical: 2,
        borderRadius: '50%',
    }
});

export default Card;