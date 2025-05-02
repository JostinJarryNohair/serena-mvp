import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={24} name="people-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={24} name="language-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ressource"
        options={{
          title: 'Ressource',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={24} name="time-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
