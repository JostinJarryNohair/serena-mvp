import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { colors, typography } from "../theme";
import cat from '../assets/images/cat.png';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Allo!</Text>
        <Text style={styles.subtext}>
          Je suis Serena, et je suis ici pour vous aider.
        </Text>
        
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

  crisisButton: {
    backgroundColor: colors.primary,
paddingVertical: 12,
paddingHorizontal: 24,
alignItems: 'center',
borderRadius: 60,   
  },
  crisisButtonText: {
    color: 'white',
    fontSize: typography.fontSizes.xxlarge,
  },
});
