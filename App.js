import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import Botao from './Botao.js';

export default function App() {

  console.disableYellowBox = true;
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [sinal, setSinal] = useState('');

  const [stringCalc, setStringCalc] = useState('0');
  
  { //fonte
    let [fontsLoaded] = useFonts({
      Ubuntu_400Regular,
      Ubuntu_500Medium,
    });
    if (!fontsLoaded) {
      return <AppLoading />
    }
  }

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '='];
  const simbolos = ['+', '-', '/', '*']

  function logicaCalc(n){    
    let resultado = 0;

    if (sinal == ''){
      setFirstNum(parseInt(firstNum.toString() + n.toString()));
      setStringCalc(parseInt(firstNum.toString() + n.toString()));
    }

    if ((n == '+' || n == '-' || n == '/' || n == '*') && secondNum == 0){
      setStringCalc(firstNum.toString() + n);
      setSinal(n);
    }

    if (sinal != ''){
      setSecondNum(parseInt(secondNum.toString() + n.toString()));
      setStringCalc(firstNum + sinal + parseInt(secondNum.toString() + n.toString()));
    }

    if (n == '='){
      if(sinal == '+'){
        resultado = firstNum + secondNum;
      }else if (sinal == '-'){
        resultado = firstNum - secondNum;
      }else if (sinal == '/'){
        resultado = firstNum / secondNum;
      }else if (sinal == '*'){
        resultado = firstNum * secondNum;
      }
      setStringCalc(resultado);
      setFirstNum(resultado);
      setSecondNum(0);
      setSinal('');
      resultado = 0;
    }
    
    if (n == 'C'){
      setFirstNum(0);
      setSinal('');
      setSecondNum(0);
      setStringCalc('0');
      resultado = 0;
    }
  }
  

  return (
    <View style={styles.corpo}>
      <StatusBar style='light' />

      <View style={styles.calculo}>
        <Text style={styles.strCalc}>{stringCalc}</Text>
      </View>

      <View style={styles.btnsSimbolos}>
        {
          simbolos.map((val)=>{
            return(
              <TouchableOpacity onPress={()=>logicaCalc(val)} style={styles.btnSimbolo}>
                <Text style={styles.simbText}>{val}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>

      <View style={styles.numbs}>
        {
          numeros.map((val)=>{
            return(
              <Botao logicaCalc={logicaCalc} numero={val}></Botao>
            );
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  corpo:{
    flex:1,
    backgroundColor:'#000'
  },
  calculo:{  
    paddingTop: Constants.statusBarHeight + 10,
    padding:10,
    backgroundColor:'#50a8',
    borderBottomColor:'#000',
    borderBottomWidth: 3,
    height:'19.2%',
    justifyContent:'center',
    paddingLeft:20
  },
  strCalc:{
    fontSize:35,
    fontFamily:'Ubuntu_400Regular',
    color:'#fff'
  },
  btnsSimbolos:{
    flexDirection:'row',
    height:'14%',
  },
  btnSimbolo:{
    width:'25%',
    backgroundColor:'#50a8',
    paddingVertical:5,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    borderWidth:2,
  },
  simbText:{
    fontSize:35,
    fontFamily:'Ubuntu_400Regular',
    color:'#fff'
  },
  numbs:{
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    height:'66.8%',
  },
});
