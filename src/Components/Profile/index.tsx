import { Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from './styles';

export function Profile() {
  return(
    <SafeAreaView>
      <View style={styles.header}>Modular</View>
      <View style={styles.body}>
        <Pressable style={styles.place}>
          <Text>Fotos da Modular</Text>
          <View>
            {/* fotos */}
          </View>
        </Pressable>
        <Pressable style={styles.party}>
          <Text>Festa 1</Text>
          <View>
            {/* fotos */}
          </View>
        </Pressable>
        <Pressable style={styles.party}>
          <Text>Festa 2</Text>
          <View>
            {/* fotos */}
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}