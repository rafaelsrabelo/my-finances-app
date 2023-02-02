import { useState } from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import {Feather } from '@expo/vector-icons'
import rafael from '../../../assets/rafael.jpeg'
export function Header ({ name }) {
  return (
    <View style={styles.header}>
      <View>
      <Image source={rafael} style={styles.avatar} />
      <Text style={styles.heading}>Olá, {name}</Text>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonEye}>
          <Feather
            name="eye"
            size={36}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#820AD1',
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50
  },
  heading: {
    fontSize: 22,
    color: "#fff",
  },
  avatar: {
    marginBottom: 20,
    height: 72,
    width: 72,
    borderRadius: 50
  },
  buttonEye: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 44 / 2,
  }
})