import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        placeholder="Enter your password"
        secureTextEntry={!showPassword} // Ở đây là nơi quyết định ẩn/hiện mật khẩu
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={toggleShowPassword}>
        <Text>{showPassword ? 'Hide' : 'Show'} Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
