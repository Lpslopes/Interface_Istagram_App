import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text>Meu Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        
    }

})