import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = () => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => alert('Welcome Android')}>
            <Text style={styles.text}>Bouton Android</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        alignItems: "center", // Centrer le texte horizontalement
    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});
