import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';


let txt = '';
export default function Login({ navigation }) {

  function setText(text) {
    txt = text;
  }


  return (
    <View>
      <Text>Loja de Brunno Marques</Text>
      <TextInput
        placeholder='Usuário'
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
        onChangeText={(texto) => setText(texto)}
      />

      <Button

        title="Entrar"
        onPress={() => {

          if (txt.length == 0) {
            alert('Digite um nome válido')
          } else {
            navigation.navigate('Home', { pessoa: txt })
          }
        }}
      />

    </View>
  );
};
