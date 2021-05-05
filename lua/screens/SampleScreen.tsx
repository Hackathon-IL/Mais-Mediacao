import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export type SampleScreenProps = {
}

export default ({ }: SampleScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sample Screen </Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
