import React, {useEffect, useState} from 'react';
import {
	Text, 
	TextInput,
	View,
} from 'react-native';

export const Input: React.FC<IInput> = ({
  onChangeText,
  onBlur,
  value,
  error,
  placeholder,
  secureTextEntry = false,
}) => {
  const [secureText, setSecureText] = useState(false);
  useEffect(() => {
    if (secureTextEntry) setSecureText(true);
  }, []);
  return (
    <View>
			<TextInput
				placeholder={placeholder}
				secureTextEntry={secureText}
				onChangeText={onChangeText}
				onBlur={onBlur}
				value={value}
				autoCapitalize="none"
			/>
      {error && (
				<Text>{error}</Text>
			)}
    </View>
  );
};