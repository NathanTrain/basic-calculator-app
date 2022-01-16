import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botao(props) {

    if (props.numero == '=' || props.numero == 'C'){
        return(
            <View style={styles.signal}>
                <TouchableOpacity onPress={()=>props.logicaCalc(props.numero)} style={styles.toucheble}>
                    <Text style={styles.textSingle}>
                        {props.numero}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    } else{
        return(
            <View style={styles.single}>
                <TouchableOpacity onPress={()=>props.logicaCalc(props.numero)} style={styles.toucheble}>
                    <Text style={styles.textSingle}>
                        {props.numero}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    signal:{
        backgroundColor:'#50a8',
        borderColor:'#fff',
        borderWidth:1,
        width:'33.3%',
        height:'25%',
        paddingVertical:5,
    },
    single:{
        backgroundColor:'#000',
        borderColor:'#fff',
        borderWidth:1,
        width:'33.3%',
        height:'25%',
        paddingVertical:5,
    },
    toucheble:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    textSingle:{
        fontSize:35,
        color:'#fff',
        fontFamily:'Ubuntu_400Regular'
    }
})