import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  list: {
    marginHorizontal: 5,
  },
});

export default PalettePreview;
