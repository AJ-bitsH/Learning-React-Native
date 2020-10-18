import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ onIncrease, onDecrease, color }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase ${color}`}
            />
            <Button
                onPress = {() => onDecrease()}
                title={`Decrease ${color}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;