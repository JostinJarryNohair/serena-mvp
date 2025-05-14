import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Vibration } from 'react-native';
import { colors, typography } from '../../theme';

interface GroundingExerciseProps {
  // Vous pouvez ajouter des props si nécessaire
}

export default function GroundingExercise({}: GroundingExerciseProps) {
  // Fonction pour le motif de vibration de grounding
  const triggerGroundingVibration = () => {
    // Motif 5-4-3-2-1 pour technique de grounding
    const pattern = [
      0, 500, 300, // 5: vibration longue suivie d'une pause
      400, 300, // 4: vibration moyenne-longue
      300, 300, // 3: vibration moyenne
      200, 300, // 2: vibration courte
      100, 300, // 1: vibration très courte
    ];
    
    Vibration.vibrate(pattern, false);
  };

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseTitle}>Technique 5-4-3-2-1</Text>
      <Text style={styles.exerciseDescription}>
        Identifiez autour de vous:
      </Text>
      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>5</Text>
        <Text style={styles.stepText}>choses que vous pouvez <Text style={styles.highlight}>voir</Text></Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>4</Text>
        <Text style={styles.stepText}>choses que vous pouvez <Text style={styles.highlight}>toucher</Text></Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>3</Text>
        <Text style={styles.stepText}>choses que vous pouvez <Text style={styles.highlight}>entendre</Text></Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>2</Text>
        <Text style={styles.stepText}>choses que vous pouvez <Text style={styles.highlight}>sentir</Text></Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepNumber}>1</Text>
        <Text style={styles.stepText}>chose que vous pouvez <Text style={styles.highlight}>goûter</Text></Text>
      </View>
      <TouchableOpacity 
        style={styles.vibrationButton}
        onPress={triggerGroundingVibration}
      >
        <Text style={styles.buttonText}>Démarrer vibration rythmique</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    padding: 20,
    alignItems: 'center',
  },
  exerciseTitle: {
    fontSize: typography.fontSizes.xlarge,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 16,
  },
  exerciseDescription: {
    fontSize: typography.fontSizes.medium,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    color: 'white',
    textAlign: 'center',
    lineHeight: 40,
    fontSize: typography.fontSizes.large,
    fontWeight: 'bold',
    marginRight: 16,
  },
  stepText: {
    fontSize: typography.fontSizes.medium,
    color: '#333',
    flex: 1,
  },
  highlight: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  vibrationButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: typography.fontSizes.medium,
    fontWeight: '500',
  },
});
