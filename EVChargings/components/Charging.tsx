import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Charging: React.FC = () => {
	const [departureTime, setDepartureTime] = useState<string>('08:00');
	const [batteryNeed, setBatteryNeed] = useState<string>('50%');
	const { isDarkMode } = useTheme();

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<Text style={[styles.title, isDarkMode && styles.darkTitle]}>Charging Settings</Text>
			<View style={styles.inputContainer}>
				<Text style={[styles.label, isDarkMode && styles.darkText]}>Departure Time:</Text>
				<TextInput
					style={[styles.input, isDarkMode && styles.darkInput]}
					value={departureTime}
					onChangeText={setDepartureTime}
					placeholder="HH:MM"
					placeholderTextColor={isDarkMode ? '#999' : '#666'}
					keyboardType="numeric"
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text style={[styles.label, isDarkMode && styles.darkText]}>Battery Charging Need:</Text>
				<TextInput
					style={[styles.input, isDarkMode && styles.darkInput]}
					value={batteryNeed}
					onChangeText={setBatteryNeed}
					placeholder="Enter percentage (e.g., 50%)"
					placeholderTextColor={isDarkMode ? '#999' : '#666'}
					keyboardType="numeric"
				/>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Save Settings</Text>
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
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default Charging;