import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard: React.FC = () => {
	const [chargingState, setChargingState] = useState<string>('Not charging');
	const [ecoMode, setEcoMode] = useState<boolean>(false);
	const [cableLocked, setCableLocked] = useState<boolean>(false);
	const { isDarkMode } = useTheme();

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<View style={[styles.widget, isDarkMode && styles.darkWidget]}>
				<Text style={[styles.widgetTitle, isDarkMode && styles.darkText]}>Charging Status</Text>
				<Text style={[styles.statusText, isDarkMode && styles.darkText]}>{chargingState}</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => setChargingState('Charging')}
					>
						<Text style={styles.buttonText}>Start Charging</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => setChargingState('Not charging')}
					>
						<Text style={styles.buttonText}>Stop Charging</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={[styles.widget, isDarkMode && styles.darkWidget]}>
				<Text style={[styles.widgetTitle, isDarkMode && styles.darkText]}>Eco Mode</Text>
				<View style={styles.switchContainer}>
					<Text style={isDarkMode && styles.darkText}>{ecoMode ? 'On' : 'Off'}</Text>
					<Switch
						value={ecoMode}
						onValueChange={setEcoMode}
						trackColor={{ false: "#767577", true: "#81b0ff" }}
						thumbColor={ecoMode ? "#4CAF50" : "#f4f3f4"}
					/>
				</View>
			</View>
			<View style={[styles.widget, isDarkMode && styles.darkWidget]}>
				<Text style={[styles.widgetTitle, isDarkMode && styles.darkText]}>Cable Lock</Text>
				<View style={styles.switchContainer}>
					<Text style={isDarkMode && styles.darkText}>{cableLocked ? 'Locked' : 'Unlocked'}</Text>
					<Switch
						value={cableLocked}
						onValueChange={setCableLocked}
						trackColor={{ false: "#767577", true: "#81b0ff" }}
						thumbColor={cableLocked ? "#4CAF50" : "#f4f3f4"}
					/>
				</View>
			</View>
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
	widget: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
		elevation: 2,
	},
	darkWidget: {
		backgroundColor: '#1e1e1e',
	},
	widgetTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	darkText: {
		color: '#fff',
	},
	statusText: {
		fontSize: 16,
		marginBottom: 8,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		backgroundColor: '#4CAF50',
		padding: 10,
		borderRadius: 4,
		flex: 1,
		marginHorizontal: 4,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default Dashboard;