import React, { useState, useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import ColorBox from '../components/ColorBox';

let colorArray = [];

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  return (
    <FlatList
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

const styles = StyleSheet.create({
  margins: {
    marginBottom: 10,
    marginHorizontal: 10,
  },

  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default ColorPalette;
