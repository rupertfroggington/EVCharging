import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from '../components/Dashboard';
import Charging from '../components/Charging';
import Account from '../components/Account';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

const Tab = createBottomTabNavigator();

function ThemeToggle() {
	const { isDarkMode, toggleTheme } = useTheme();
	return (
		<TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
			<Ionicons name={isDarkMode ? 'sunny' : 'moon'} size={24} color={isDarkMode ? 'white' : 'black'} />
		</TouchableOpacity>
	);
}

function AppContent() {
	const [isLoading, setIsLoading] = useState(true);
	const { isDarkMode } = useTheme();

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			console.log("App finished loading");
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<View style={[styles.loadingContainer, isDarkMode && styles.darkContainer]}>
				<ActivityIndicator size="large" color="#4CAF50" />
			</View>
		);
	}

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<View style={[styles.header, isDarkMode && styles.darkHeader]}>
				<Ionicons name="battery-charging" size={24} color="#4CAF50" />
				<Text style={[styles.headerTitle, isDarkMode && styles.darkText]}>EV Charging</Text>
				<ThemeToggle />
			</View>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Dashboard') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Charging') {
							iconName = focused ? 'flash' : 'flash-outline';
						} else if (route.name === 'Account') {
							iconName = focused ? 'person' : 'person-outline';
						}
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: '#4CAF50',
					tabBarInactiveTintColor: isDarkMode ? '#888' : 'gray',
					tabBarStyle: isDarkMode ? styles.darkTabBar : styles.tabBar,
				})}
			>
				<Tab.Screen name="Dashboard" component={Dashboard} />
				<Tab.Screen name="Charging" component={Charging} />
				<Tab.Screen name="Account" component={Account} />
			</Tab.Navigator>
		</View>
	);
}

export default function App() {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4',
	},
	darkContainer: {
		backgroundColor: '#121212',
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#ffffff',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
	},
	darkHeader: {
		backgroundColor: '#1e1e1e',
		borderBottomColor: '#333',
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#4CAF50',
	},
	darkText: {
		color: '#fff',
	},
	toggleButton: {
		padding: 10,
	},
	tabBar: {
		backgroundColor: '#fff',
	},
	darkTabBar: {
		backgroundColor: '#1e1e1e',
	},
});