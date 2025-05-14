import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors, typography } from "../theme";
import cat from "../assets/images/cat.png";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top , paddingBottom: insets.bottom }]}>
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

          <View style={styles.secondaryButtonsRow}>
            <TouchableOpacity
              style={styles.insightButton}
              onPress={() => console.log("Insights button pressed")}
              accessibilityLabel="Insights button"
              accessibilityHint="Press this button to access insights"
            >
              <Ionicons name="search" size={20} color="black" style={styles.buttonIcon} />
              <Text style={styles.insightButtonText}>Insights</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.voiceButton}
              onPress={() => router.push("/grounding")}
              accessibilityLabel="Grounding button"
              accessibilityHint="Press this button to access grounding features"
            >
              <Ionicons name="volume-medium" size={20} color="white" style={styles.buttonIcon} />
              <Text style={styles.secondaryButtonText}>Grounding</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            style={styles.premiumButton}
            onPress={() => console.log("Premium button pressed")}
            accessibilityLabel="Premium button"
            accessibilityHint="Press this button to access premium features"
          >
            <Ionicons name="lock-closed" size={18} color="#5D4037" style={styles.buttonIcon} />
            <Text style={styles.premiumButtonText}>Premium</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  catContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },

  secondaryButtonsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 10,
  },

  crisisButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    borderRadius: 60,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  insightButton: {
    backgroundColor: "#E8EAF6", // Light blue/gray color
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 60,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  
  voiceButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 60,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },

  premiumButton: {
    backgroundColor: "#F5F5DC", // Beige color
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 60,
    flexDirection: "row",
    justifyContent: "center",
    width: "40%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2,
  },
  
  buttonIcon: {
    marginRight: 8,
  },
  
  secondaryButtonText: {
    color: "white",
    fontSize: typography.fontSizes.medium,
    fontWeight: "500",
    textAlign: "center",
  },
  
  insightButtonText: {
    color: "black",
    fontSize: typography.fontSizes.medium,
    fontWeight: "500",
    textAlign: "center",
  },
  
  premiumButtonText: {
    color: "#5D4037", // Brown text
    fontSize: typography.fontSizes.medium,
    fontWeight: "500",
    textAlign: "center",
  },
  
  crisisButtonText: {
    color: "white",
    fontSize: typography.fontSizes.xxlarge,
    fontWeight: "600",
  },
});
