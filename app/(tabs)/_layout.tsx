import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor:"#962bc0ff",
        headerStyle:{
            backgroundColor:"#ffffffff",
        },
        headerShadowVisible:false,
        headerTintColor:"#fff",
        tabBarStyle:{
            backgroundColor:"#25292e"
        },

    }}>
      <Tabs.Screen name="index" options=
      {{title:"Scan",
      headerShown:false,
      tabBarIcon:({color, focused})=>(
        <Ionicons name={focused ? "camera-sharp":"camera-outline"} color={color} size={24}/>
      )
      }}/>
      <Tabs.Screen name="billsPage" options={{title:"Bills",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
            <Ionicons name={focused ? "reader-sharp":"reader-outline"} color={color} size={24}/>
        )
        }}/>
    </Tabs>
  )
}
