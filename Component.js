import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, PickerIOS, Picker, Platform, TouchableOpacity, Dimensions } from 'react-native'

const {height,width} = Dimensions.get('window')

export class Input extends React.PureComponent {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <View>
                <TextInput
                    {...this.props}
                    style={[styles.input,{...this.props.style}]}
                />
            </View>
        )
    }
}

export class MyPicker extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            selectedValue:'',
            pickerItems:[
                {label:'Male',value:'M'},
                {label:'Female',value:'F'}
            ],
            showIosPicker:false
        }
    }

    _handleValueChange= selectedValue =>{
        this.setState({selectedValue})
    }

    _togglePicker=()=>{
        this.setState({showIosPicker:!this.state.showIosPicker})
    }

    render(){
        if(Platform.OS == 'ios'){
            return(
                <View>
                    <TouchableOpacity 
                        onPress={this._togglePicker}>
                        <Text>Select</Text>
                    </TouchableOpacity>
                    {
                        this.state.showIosPicker &&
                        <View style={styles.bottomView}>
                            <View style={styles.bottomViewChild}>
                                <PickerIOS
                                    onValueChange={this._handleValueChange}
                                    selectedValue={this.state.selectedValue}>
                                    {
                                        this.state.pickerItems.map((item,index)=>
                                            <PickerIOS.Item key={'picker'+index.toString()} label={item.label} value={item.value} />
                                        )
                                    }
                                </PickerIOS>
                            </View>
                        </View>
                    }
                </View>
            )
        }else{
            return(
                <Picker
                    onValueChange={this._handleValueChange}
                    selectedValue={this.state.selectedValue}>
                    {
                        this.state.pickerItems.map((item,index)=>
                            <Picker.Item key={'picker'+index.toString()} label={item.label} value={item.value} />
                        )
                    }
                </Picker>
            )
        }
    }
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#999',
        padding: 10,
        borderRadius: 3,
    },
    bottomView:{
        // position: 'absolute',
        // bottom:0,
        // width:'100%',
        // backgroundColor:'red',
        // zIndex:999,
        // height:100
    },
    bottomViewChild:{
        // flex:1,
        // width:'100%'
    }
})