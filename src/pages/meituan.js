import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";

export default class Meituan extends Component {
    render() {
        return (
            <View style={mtclass.container}>
                <View style={[mtclass.header, mtclass.header_high]}>
                    <View style={[mtclass.header_high, mtclass.header_left]}>
                        <Text>1</Text>
                    </View>
                    <View style={[mtclass.header_high, mtclass.header_right]}>
                        <View style={mtclass.header_right_part1}>
                            <Text>2.1</Text>
                        </View>
                        <View style={mtclass.header_right_part2}>
                            <View style={mtclass.header_right_bottom_part1}>
                                <Text>2.2.1</Text>
                            </View>
                            <View style={mtclass.header_right_bottom_part2}>
                                <Text>2.2.2</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mtclass = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
    },
    header_high: {
        height: 160,
    },
    header_left: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    header_right: {
        flex: 2,
        flexDirection: 'column'
    },
    header_right_part1: {
        flex: 12,
        borderWidth: 1,
        borderColor: 'blue',
    },
    header_right_part2: {
        flex: 11,
        flexDirection:'row',
        borderWidth: 1,
    },
    header_right_bottom_part1:{
        flex: 5,
        borderWidth: 1,
        borderColor: 'green',
    },
    header_right_bottom_part2:{
        flex: 5,
        borderWidth: 1,
        borderColor: '#FF00FF',
    }
}) 