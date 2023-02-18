import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

interface ComponentProps {
  title: string;
  data: any[];
}

export function FeedPubli({ title, data }: ComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {
        data.length > 1 ? (
           <Carousel
             loop={false}
             data={data}
             sliderWidth={100}
             itemWidth={100}
             windowSize={1}
             renderItem={({index}) => (
              <View>
               <Image source={data[index]} style={styles.image} />   
              </View>
              )}
           />
         ) : (
          <View>
            <Image source={data[0]} style={styles.image}/>
          </View>
         )
        }    
    </View>
  );
}

// const width = Dimensions.get('window').width; //full width

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
    //width,
    height: 300,
    resizeMode: 'contain'
  }
});
