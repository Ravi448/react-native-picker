import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Input, MyPicker } from './Component';

export default class Form extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.mainView}>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                    >
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />

                        <View>
                            <MyPicker/>
                        </View>

                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                        <Input placeholder={'name'} style={styles.input} />
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    mainView:{
        flex:1,
        padding:20
    },
    input:{
        marginBottom:10
    }
})