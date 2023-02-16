import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Dimensions } from "react-native";


interface ComponentProps {
  title: string;
  imageSource?: ImageSourcePropType;
}

export function FeedPubli({ title, imageSource }: ComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* Precisa ser um slider de image ou apenas uma image */}
      <Image source={imageSource} style={styles.image}/>
    </View>
  );
}

const width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    
    marginTop: 5
  },
  image: {
    width,
    height: 300,
    resizeMode: 'contain'
  }
});
