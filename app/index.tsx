import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors, typography } from "../theme";
import cat from '../assets/images/cat.png';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Allo!</Text>
        <Text style={styles.subtext}>
          Je suis Serena, et je suis ici pour vous aider.
        </Text>
        <View style={styles.catContainer}>
          <Image 
            source={cat}
            style={styles.catImage}
            resizeMode="contain"
          />
        
        <TouchableOpacity
        style={styles.crisisButton}
        onPress={() => console.log("About button pressed")}  // Navigate to "About" page
      >
        
        <Text style={styles.crisisButtonText}>J&apos;ai une crise</Text>
      </TouchableOpacity>
      </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  greeting: {
    fontSize: typography.fontSizes.title,
    fontWeight: "600",
    color: colors.primary,
    marginTop: 20,
  },
  subtext: {
    fontSize: typography.fontSizes.xlarge,
    color: colors.primary,
    textAlign: "center",
    opacity: 0.8,
    fontWeight: "400",
  },

  catImage: {
    width: 350,
    height: 350,
  },

  catContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  crisisButton: {
    backgroundColor: colors.primary,
paddingVertical: 12,
paddingHorizontal: 24,
alignItems: 'center',
borderRadius: 60,   
width: '80%',
  },
  crisisButtonText: {
    color: 'white',
    fontSize: typography.fontSizes.xxlarge,
  },
});
