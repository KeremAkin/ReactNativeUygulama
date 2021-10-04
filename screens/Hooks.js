import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useCallBack,
  Touchable,
  StyleSheet,
} from 'react-native';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((current) => current + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((current) => current - 1);
  }, []);

  return (
    <View>
      <Text style={styles.count}>{count}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.button}>Arttır</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={styles.button}>Azalt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    alignSelf: 'center',
    fontSize: 30,
    backgroundColor: 'teal',
  },
  count: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 140,
    marginBottom: 160,
    marginTop: 160,
  },
});

export default Hooks;
