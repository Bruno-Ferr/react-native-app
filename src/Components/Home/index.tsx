import { useState } from "react";
import { ImageSourcePropType, Pressable, SafeAreaView, Text, View } from "react-native";
const Teste = require('../../assets/teste.png');
import { FeedPubli } from "../Publi";

interface info {
  user: string;
  fotos: any[]
}

export function Home() {
  const [data, setData] = useState<Array<info>>([{
    user: 'Modular',
    fotos: [
      Teste, Teste, Teste
    ]
  },{
    user: 'Modular',
    fotos: [
      Teste, Teste
    ]
  },{
    user: 'Modular',
    fotos: [
      Teste
    ]
  },
  ])

  return (
    <SafeAreaView>
      {
        data.map(publi => {
          return (
            <FeedPubli title={publi.user} data={publi.fotos} />
          )
        })
      }
      {/* Map com feedpubli */}
      
    </SafeAreaView>
  )
}