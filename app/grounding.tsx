import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Text,
  ScrollView
} from "react-native";
import { colors, typography } from "../theme";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import GroundingExercise from "./components/GroundingExercise";
import BreathingExercise from "./components/BreathingExercise";

export default function GroundingScreen() {
  const insets = useSafeAreaInsets();
  const [currentExercise, setCurrentExercise] = useState<string | null>(null);

  // Afficher l'exercice sélectionné
  const renderExercise = () => {
    switch (currentExercise) {
      case 'grounding':
        return <GroundingExercise />;
      
      case 'breathing':
        return <BreathingExercise />;
      
      default:
        return (
          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseDescription}>
              Choisissez un exercice pour commencer
            </Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercices de bien-être</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.exerciseSelector}>
          <TouchableOpacity 
            style={[
              styles.exerciseButton, 
              currentExercise === 'grounding' && styles.activeExerciseButton
            ]}
            onPress={() => setCurrentExercise('grounding')}
          >
            <Text style={[
              styles.exerciseButtonText,
              currentExercise === 'grounding' && styles.activeExerciseButtonText
            ]}>
              Technique de grounding
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.exerciseButton, 
              currentExercise === 'breathing' && styles.activeExerciseButton
            ]}
            onPress={() => setCurrentExercise('breathing')}
          >
            <Text style={[
              styles.exerciseButtonText,
              currentExercise === 'breathing' && styles.activeExerciseButtonText
            ]}>
              Respiration profonde
            </Text>
          </TouchableOpacity>
        </View>

        {renderExercise()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: typography.fontSizes.medium,
    color: colors.primary,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.fontSizes.large,
    fontWeight: '600',
    color: colors.primary,
    marginRight: 40, // Pour compenser le bouton retour et centrer le titre
  },
  content: {
    flex: 1,
  },
  exerciseSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  exerciseButton: {
    backgroundColor: 'rgba(91, 196, 219, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  activeExerciseButton: {
    backgroundColor: colors.primary,
  },
  exerciseButtonText: {
    color: colors.primary,
    fontSize: typography.fontSizes.medium,
    fontWeight: '500',
  },
  activeExerciseButtonText: {
    color: 'white',
  },
  exerciseContainer: {
    padding: 20,
    alignItems: 'center',
  },
  exerciseDescription: {
    fontSize: typography.fontSizes.medium,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  }
});
