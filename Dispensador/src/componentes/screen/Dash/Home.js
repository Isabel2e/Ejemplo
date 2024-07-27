import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const Navegacion = useNavigation();
  return (
    <View>
      <Text style={{marginBottom:20}}>Bienvenido </Text>
      <Button style={styles.Button} icon="map-search-outline" mode="contained"  onPress={() => Navegacion.navigate("Mapa")}>Mapa de la casa</Button>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
Button:{
  width: 200,
  height: 50,
  marginBottom:20
}
})