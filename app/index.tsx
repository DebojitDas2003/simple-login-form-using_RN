import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'

const index: React.FC = () => {
  const [username, setUsername] = useState('')
  const [createpass, setCreatepass] = useState('')
  const [confirmpass, setConfirmpass] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Form</Text>
      <View style={styles.input}>
        <View style={styles.inputContainer}>
          <Text style={styles.key}>Create username: </Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.inputBox}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.key}>Create password: </Text>
          <TextInput
            value={createpass}
            onChangeText={setCreatepass}
            style={styles.inputBox}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.key}>Confirm password: </Text>
          <TextInput
            value={confirmpass}
            onChangeText={setConfirmpass}
            style={styles.inputBox}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    alignItems: 'center',

    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  key: {
    fontWeight: '500',
    fontSize: 18,
  },
  inputBox: {
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 20,
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default index
