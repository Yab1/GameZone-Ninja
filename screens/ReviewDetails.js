import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route: { params } }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{params.title}</Text>
      <Text style={globalStyles.paragraph}>{params.body}</Text>
      <Text style={globalStyles.paragraph}>{params.rating}</Text>
    </View>
  );
}
