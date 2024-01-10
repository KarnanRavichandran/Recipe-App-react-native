import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = ({ title, duration, complexity, imageUrl, affordability, onSelectMeal }) => {
//   console.log('Title:', title);
//   console.log('Duration:', duration);

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.info}>{duration} mins</Text>
            <Text style={styles.info}> {complexity.toUpperCase()} </Text>
            <Text style={styles.info}> {affordability.toUpperCase()} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: 'white',
  },
  info: {
    fontFamily: 'OpenSans-Regular',
  },
});
