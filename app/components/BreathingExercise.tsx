import React, { useState, useEffect, useRef } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Animated, 
  Easing,
  Vibration
} from 'react-native';
import { colors, typography } from '../../theme';
import Svg, { Circle } from 'react-native-svg';

interface BreathingExerciseProps {
  // Vous pouvez ajouter des props si nécessaire
}

export default function BreathingExercise({}: BreathingExerciseProps) {
  const breathAnimation = useState(new Animated.Value(1))[0];
  const ringAnimation = useState(new Animated.Value(0))[0];
  const [breathPhase, setBreathPhase] = useState("Préparez-vous");
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);
  const [vibrationsEnabled, setVibrationsEnabled] = useState(true);

  // Animation pour la respiration
  const startBreathingAnimation = () => {
    // Réinitialiser les animations si elles sont en cours
    if (animationRef.current) {
      animationRef.current.stop();
    }
    
    // Annuler toute vibration en cours
    Vibration.cancel();
    
    // Durées des phases de respiration
    const inspireDuration = 4000;
    const holdDuration = 2000;
    const expireDuration = 6000;
    const pauseDuration = 1000;
    const totalDuration = inspireDuration + holdDuration + expireDuration + pauseDuration;
    
    // Animation du cercle central (échelle)
    const breathSequence = Animated.sequence([
      // Inspiration (agrandir)
      Animated.timing(breathAnimation, {
        toValue: 1.3,
        duration: inspireDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true
      }),
      // Retenir
      Animated.timing(breathAnimation, {
        toValue: 1.3,
        duration: holdDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true
      }),
      // Expiration (rétrécir)
      Animated.timing(breathAnimation, {
        toValue: 1,
        duration: expireDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true
      }),
      // Pause
      Animated.timing(breathAnimation, {
        toValue: 1,
        duration: pauseDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true
      })
    ]);
    
    // Animation de l'anneau (progression)
    const ringSequence = Animated.timing(ringAnimation, {
      toValue: 1,
      duration: totalDuration,
      easing: Easing.linear,
      useNativeDriver: false
    });
    
    // Exécuter les animations en parallèle
    animationRef.current = Animated.parallel([breathSequence, ringSequence]);
    
    // Démarrer les animations
    animationRef.current.start(({ finished }) => {
      if (finished) {
        // Réinitialiser l'animation de l'anneau
        ringAnimation.setValue(0);
        // Redémarrer l'animation
        startBreathingAnimation();
      }
    });
    
    // Mettre à jour le texte d'instruction en fonction de la phase
    setBreathPhase("Inspirez");
    
    // Déclencher la vibration uniquement si elles sont activées
    if (vibrationsEnabled) {
      // Vibration continue pendant 4 secondes (phase d'inspiration)
      Vibration.vibrate(inspireDuration);
    }
    
    // Phase de rétention
    setTimeout(() => {
      setBreathPhase("Retenez");
    }, inspireDuration);
    
    // Phase d'expiration
    setTimeout(() => {
      setBreathPhase("Expirez");
    }, inspireDuration + holdDuration);
    
    // Phase de pause
    setTimeout(() => {
      setBreathPhase("Pause");
    }, inspireDuration + holdDuration + expireDuration);
  };

  // Démarrer l'exercice de respiration au chargement du composant
  useEffect(() => {
    startBreathingAnimation();
    
    // Nettoyage lors du démontage du composant
    return () => {
      Vibration.cancel();
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, []);

  // Convertir la valeur d'animation en angle pour l'anneau SVG
  const animatedCircleProps = ringAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 360]
  });

  // Basculer l'état des vibrations
  const toggleVibrations = () => {
    if (vibrationsEnabled) {
      Vibration.cancel();
    } else if (breathPhase === "Inspirez") {
      // Redémarrer la vibration si on est en phase d'inspiration
      Vibration.vibrate(4000);
    }
    setVibrationsEnabled(!vibrationsEnabled);
  };

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseTitle}>Respiration profonde</Text>
      <Text style={styles.exerciseDescription}>
        Suivez le cercle pour réguler votre respiration
      </Text>
      <View style={styles.breathingContainer}>
        {/* Anneau animé */}
        <View style={styles.ringContainer}>
          <Svg height="220" width="220" viewBox="0 0 220 220">
            {/* Anneau de fond */}
            <Circle
              cx="110"
              cy="110"
              r="100"
              stroke="#E0E0E0"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Anneau animé */}
            <AnimatedCircle
              cx="110"
              cy="110"
              r="100"
              stroke={colors.primary}
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={Math.PI * 200}
              strokeDashoffset={animatedCircleProps.interpolate({
                inputRange: [0, 360],
                outputRange: [Math.PI * 200, 0]
              })}
              strokeLinecap="round"
            />
          </Svg>
          
          {/* Cercle central animé */}
          <Animated.View 
            style={[
              styles.breathCircle,
              {
                transform: [{ scale: breathAnimation }]
              }
            ]}
          >
            <Text style={styles.breathText}>{breathPhase}</Text>
          </Animated.View>
        </View>
      </View>
      <Text style={styles.breathInstructions}>
        Inspirez pendant 4 secondes{'\n'}
        Retenez pendant 2 secondes{'\n'}
        Expirez pendant 6 secondes
      </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={[
            styles.optionButton,
            !vibrationsEnabled && styles.optionButtonDisabled
          ]}
          onPress={toggleVibrations}
        >
          <Text style={styles.optionButtonText}>
            {vibrationsEnabled ? "Désactiver vibrations" : "Activer vibrations"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Créer un composant Circle animé pour l'anneau de progression
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
  breathingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: '100%',
  },
  ringContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 220,
  },
  breathCircle: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  breathText: {
    color: 'white',
    fontSize: typography.fontSizes.medium,
    fontWeight: '500',
  },
  breathInstructions: {
    marginTop: 20,
    fontSize: typography.fontSizes.medium,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  optionsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: 'rgba(1, 97, 103, 0.8)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  optionButtonDisabled: {
    backgroundColor: 'rgba(150, 150, 150, 0.8)',
  },
  optionButtonText: {
    color: 'white',
    fontSize: typography.fontSizes.small,
  },
});
