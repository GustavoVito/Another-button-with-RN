import React, {Fragment} from 'react'
import {View, Text} from 'react-native'
import estilo from './estilo'

export default comp => (
    <> 
      <Text style={estilo.FontGrande}> {comp.principal} </Text>
      <Text> {comp.secundario} </Text>
    </>
  )
