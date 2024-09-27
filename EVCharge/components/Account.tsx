import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Account: React.FC = () => {
	const [email, setEmail] = useState<string>('user@example.com');
	const { isDarkMode } = useTheme();

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<Text style={[styles.title, isDarkMode && styles.darkTitle]}>Account</Text>
			<View style={styles.inputContainer}>
				<Text style={[styles.label, isDarkMode && styles.darkText]}>Email:</Text>
				<TextInput
					style={[styles.input, isDarkMode && styles.darkInput]}
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
					placeholderTextColor={isDarkMode ? '#999' : '#666'}
				/>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Update Email</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Change Password</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.link}>
				<Text style={[styles.linkText, isDarkMode && styles.darkLinkText]}>Help Center</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.link}>
				<Text style={[styles.linkText, isDarkMode && styles.darkLinkText]}>Live Chat</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f4f4f4',
	},
	darkContainer: {
		backgroundColor: '#121212',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#4CAF50',
		marginBottom: 16,
	},
	darkTitle: {
		color: '#6FCF97',
	},
	inputContainer: {
		marginBottom: 16,
	},
	label: {
		fontSize: 16,
		marginBottom: 8,
		color: '#333',
	},
	darkText: {
		color: '#f0f0f0',
	},
	input: {
		backgroundColor: 'white',
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#ddd',
		color: '#333',
	},
	darkInput: {
		backgroundColor: '#2C2C2C',
		borderColor: '#555',
		color: '#f0f0f0',
	},
	button: {
		backgroundColor: '#4CAF50',
		padding: 12,
		borderRadius: 4,
		alignItems: 'center',
		marginBottom: 12,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
	link: {
		marginTop: 8,
	},
	linkText: {
		color: '#4CAF50',
		textDecorationLine: 'underline',
	},
	darkLinkText: {
		color: '#6FCF97',
	},
});

export default Account;