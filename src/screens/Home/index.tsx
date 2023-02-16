import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {FeedPubli} from '../../Components/publi/FeedPubli';

export function Home() {
  return (
    <SafeAreaView>
      
      <FeedPubli title='Modular- Festa do pijama' imageSource={require('../../assets/appImg.png')} />
    </SafeAreaView>
  );
}

