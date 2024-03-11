import React from "react";
import {View, Text, StyleSheet } from 'react-native';
import Botao from './src/Botao'

export default () => (
    <View style={style.App}>
      <Botao />
    </View>
  )

  const style = StyleSheet.create({
    App: {
      backgroundColor: '#AC9',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  })