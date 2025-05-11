import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import { colors, typography } from "../theme";
import Button from "./components/Button";
import cat from '../assets/images/cat.png';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.greeting}>Allo!</Text>
        <Text style={styles.subtext}>
          Je suis Serena, et je suis ici pour vous aider.
        </Text>
        
        <View style={styles.imageContainer}>
          <Image 
            source={cat}
            style={styles.catImage}
            resizeMode="contain"
          />
        </View>
        
        <Button 
          title="J'ai une crise" 
          
          onPress={() => {
            console.log("Crisis button pressed");
          }}
          style={styles.crisisButton}
          textStyle={{fontSize: typography.fontSizes.xxlarge,fontWeight: "400"}}
        />
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 120, // Extra space at bottom for tab navigation
  },
  greeting: {
    fontSize: typography.fontSizes.title,
    fontWeight: "600",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  subtext: {
    fontSize: typography.fontSizes.xlarge,
    color: colors.primary,
    textAlign: "center",
    opacity: 0.8,
    marginBottom: 20,
    fontWeight: "400",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  catImage: {
    width: 300,
    height: 300,
  },
  crisisButton: {
    width: "100%",
    marginBottom: 24,
  
    fontSize: typography.fontSizes.xxlarge,
  },
});
