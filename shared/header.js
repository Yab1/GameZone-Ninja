import * as React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation: { openDrawer }, title }) {
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}>
      <MaterialIcons
        name="menu"
        size={24}
        style={styles.icon}
        onPress={() => openDrawer()}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    marginTop: 25,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginLeft: 25,
  },
  icon: {
    position: 'absolute',
    left: 17,
    top: 40,
  },
});
