import React, { useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Tab Two</Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
