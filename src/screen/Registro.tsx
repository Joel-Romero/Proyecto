import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Registro = () => {
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [fecha, setFecha] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [id, setId] = React.useState('');

  

  return (
    
    <SafeAreaView style={styles.container}> 

<View>
        <Text style={styles.Title}>Registrate con PlayStation</Text>
        <TextInput
          
        />
      </View>

      <View style={styles.Container2}>
        <Text style={styles.Text}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNombre}
          value={nombre}
          placeholder="Ingrese su nombre"
        />
      </View>
      <View style={styles.Container2}>
        <Text style={styles.Text}>Apellido:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setApellido}
          value={apellido}
          placeholder="Ingrese su apellido"
        />
      </View>
      <View style={styles.Container2}>
        <Text style={styles.Text}>Fecha de nacimiento:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFecha}
          value={fecha}
          placeholder="Ingrese su Fecha de nacimiento"
        />
      </View>
      <View style={styles.Container2}>
        <Text style={styles.Text}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Ingrese su email"
        />
        <View style={styles.Container2}>
        <Text style={styles.Text}>Cedula:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder="Ingrese su cedula"
        />
      </View>
      </View>
      <Button 
        title='Iniciar secion'  
        onPress={()=>('Iniciar secion')}/>  
    </SafeAreaView>
    
  );
};
