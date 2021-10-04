import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withTheme } from 'styled-components';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.margins, styles.container, boxColor]}>
      <Text style={[styles.text, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  margins: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default ColorBox;
