import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors, typography } from "../theme";
import cat from "../assets/images/cat.png";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { router } from "expo-router";

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
          <Image source={cat} style={styles.catImage} resizeMode="contain" />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.crisisButton}
            onPress={() => console.log("Crisis button pressed")}
            accessibilityLabel="J'ai une crise button"
            accessibilityHint="Press this button if you are experiencing a crisis"
          >
            <Text style={styles.crisisButtonText}>J&apos;ai une crise</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.groundingButton}
            onPress={() => router.push("/grounding")}
            accessibilityLabel="Exercice de grounding button"
            accessibilityHint="Press this button to access grounding exercises"
          >
            <Text style={styles.groundingButtonText}>Exercice de grounding</Text>
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
    marginBottom: 24,
  },

  catImage: {
    width: 350,
    height: 350,
  },

  catContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  crisisButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    borderRadius: 60,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  groundingButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    borderRadius: 60,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
 
  groundingButtonText: {
    color: "white",
    fontSize: typography.fontSizes.large,
    fontWeight: "500",
  },
  crisisButtonText: {
    color: "white",
    fontSize: typography.fontSizes.xxlarge,
    fontWeight: "600",
  },
});
