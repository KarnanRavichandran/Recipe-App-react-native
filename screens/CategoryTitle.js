import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryTitle = ({ title, onSelect, color }) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity style={{flex:1,height: 150}} onPress={onSelect}>
                <View style={{ ...styles.container, backgroundColor: color }}>
                    <Text style={styles.title} numberOfLines={2}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        elevation: 7,
        overflow: 'hidden',
        
    },
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        textAlign: 'right',
      
    },
});
