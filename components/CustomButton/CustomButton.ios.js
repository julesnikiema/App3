import React from 'react';
import { Button, StyleSheet } from 'react-native';

const CustomButton = () => {
    return <Button title="Bouton iOS" onPress={() => alert('Appui iOS')} />;
};

export default CustomButton;