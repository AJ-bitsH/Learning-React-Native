import React from 'react';
import { Text , StyleSheet, View, Image } from 'react-native';

const ImageComp = props => {


    return (
    <View>
        <Text>{props.title}</Text>
        <Image source = {props.imageSource} />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageComp;