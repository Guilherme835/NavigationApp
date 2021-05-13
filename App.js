import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { block } from 'react-native-reanimated';

const Pilha=createStackNavigator();

function Tela1 ({ navigation }){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tela 1</Text>
      <View style={styles.button}>
        <Text>
          <Button
            title= 'ir para tela 2 >'
            onPress={()=>navigation.navigate('TELA 2')}
          />
          <Button
            title= 'ir para tela 3 >>'
            onPress={()=>navigation.navigate('TELA 3')}
          />
        </Text>
      </View>
    </View>
  )
}

function Tela2 ({ navigation }){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tela 2</Text>
      <View style={styles.button}>
        <Text>
          <Button
            title= '< ir para tela 1'
            onPress={()=>navigation.navigate('TELA 1')}
          />
          <Button
            title= 'ir para tela 3 >'
            onPress={()=>navigation.navigate('TELA 3')}
          />
        </Text>
      </View>
    </View>
  )
}

function Tela3 ({ navigation }){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tela 3</Text>
      <View style={styles.button}>
        <Text>
          <Button
            title= '<< ir para tela 1'
            onPress={()=>navigation.navigate('TELA 1')}>
          </Button>
          
          <Button
            title= '< ir para tela 2'
            onPress={()=>navigation.navigate('TELA 2')}
          />
        </Text>
      </View>
    </View>
  )
}

export default function Navegacao(){
  return(
    <NavigationContainer>
      <Pilha.Navigator >
        <Pilha.Screen 
        name="TELA 1"
        component={Tela1}
        options={{title: 'tela primaria'}}
        />
        <Pilha.Screen 
        name="TELA 2"
        component={Tela2}
        options={{title: 'tela secundaria'}}
        />
        <Pilha.Screen 
        name="TELA 3"
        component={Tela3}
        options={{title: 'tela terciaria'}}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b52ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#6b52ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:63
  }
  
});
