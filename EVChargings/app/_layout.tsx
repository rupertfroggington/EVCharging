import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function ThemeToggle() {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
			<Ionicons name={isDarkMode ? 'sunny' : 'moon'} size={24} color={isDarkMode ? 'white' : 'black'} />
		</TouchableOpacity>
	);
}

function RootLayoutNav() {
	const { isDarkMode } = useTheme();

	return (
		<NavigationThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
			<Stack screenOptions={{ 
				headerShown: false,
				headerRight: () => <ThemeToggle />,
			}}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: 'modal' }} />
			</Stack>
		</NavigationThemeProvider>
	);
}

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider>
			<RootLayoutNav />
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	toggleButton: {
		padding: 10,
	},
});