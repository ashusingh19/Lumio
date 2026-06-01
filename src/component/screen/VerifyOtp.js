import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import API from '../component/services/api';

const VerifyOtp = ({ route, navigation }) => {

  const { email } = route.params;

  const [otp, setOtp] = useState('');

  const handleVerifyOtp = async () => {

    try {

      const response = await API.post(
         '/verify-otp',
        {
          email,
          otp,
        }
      );

      alert(response.data.message);

      navigation.navigate('ResetPassword', {
        email,
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'OTP Failed'
      );
    }
  };
 return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Verify OTP
      </Text>

      <TextInput
        placeholder="Enter OTP"
        style={styles.input}
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={handleVerifyOtp}
      >
        <Text style={styles.btnText}>
          Verify OTP
        </Text>
      </TouchableOpacity>

    </View>
      );
};

export default VerifyOtp;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
      marginBottom: 20,
  },

  btn: {
    backgroundColor: '#0095f6',
    padding: 15,
    borderRadius: 10,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});