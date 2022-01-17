import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
//import { Appbar } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';

class Conversor {

  constructor(name, rate) {
    this.name = name;
    this.rate = rate;
  }

  getMoeda() {
    return "Valor retornado em " + this.name + ":";
  }


}

export default function App() {

  const [conv, setConv] = useState(false);
  const [real, setReal] = useState('');
  const [valor, setValor] = useState('');
  const [x, setX] = useState(new Conversor('', 1.0))


  var dolar = new Conversor('Dólar', (1.0 / 5.64));
  var euro = new Conversor('Euro', (1.0 / 6.36));


  
  var setConversao = function (conv) {
    setX(conv);
    setConv(true);
    setValor('');
  }

  return (
    <View>
      <Text style={{ alignItems:'center', color: '#fff', backgroundColor: "#008", height: 32, alignContent: 'center', justifyContent: 'center' }}>
        Conversor de Moedas do Gabriel Matsunami
      </Text>

      <Modal transparent={false} visible={conv}>
        <TouchableOpacity onPress={() => setConv(false)}>
          <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="md-arrow-back" size={40} color="#DDD" />
        </TouchableOpacity>

        <View style={{ height: 35, margin: 5, borderRadius: 5, padding: 5, backgroundColor: '#47C', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ alignItems:'center', fontWeight: 'bold', color: '#FFF' }}>
            Conversor de Moedas do Gabriel Matsunami
          </Text>
        </View>

        <TextInput
          placeholder='Entre com o Valor em real'
          placeholderTextColor='#747474'

          style={{
            fontSize: 15,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 30,
            backgroundColor: '#FFF',
            padding: 9,
            height: 45,
            textAlignVertical: 'top',
            color: '#000',
            borderRadius: 5,
          }}


          onChangeText={(texto) => setReal(texto)}
        />



        <Button title='Converter' onPress={
          () => setValor(x.rate * real)
        }

        />

        <Text>{
        
        x.getMoeda()
        }</Text>

        <TextInput
          placeholder={x.getMoeda()}
          placeholderTextColor='#747474'

          value={parseInt(valor).toFixed(2)}

          style={{
            fontSize: 15,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 30,
            backgroundColor: '#FFF',
            padding: 9,
            height: 45,
            textAlignVertical: 'top',
            color: '#000',
            borderRadius: 5,
          }}

        />

      </Modal>

      <View style={{
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Button
          title="Real para Dólar"
          onPress={() => setConversao(dolar)}
        />
        <View style={{ height: 64 }}></View>
        <Button
          title="Real para Euro"
          onPress={() => setConversao(euro)}
        />
      </View>

    </View>

  );

};



