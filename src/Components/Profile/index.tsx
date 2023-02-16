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

          </View>
        </Pressable>
        <Pressable style={styles.party}>
          <Text>Festa 1</Text>
          <div>
            {/* fotos */}
          </div>
        </Pressable>
        <Pressable style={styles.party}>
          <Text>Festa 2</Text>
          <div>
            {/* fotos */}
          </div>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}