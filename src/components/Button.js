import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../theme/colors';

export default function Button({ title, onPress, variant = 'primary', disabled = false }) {
  const outline = variant === 'outline';
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ disabled }} onPress={onPress} disabled={disabled}
      style={({ pressed }) => [styles.base, outline ? styles.outline : variant === 'danger' ? styles.danger : styles.primary, (pressed || disabled) && styles.dim]}>
      <Text style={[styles.text, outline && styles.textOutline]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { minHeight: 52, paddingVertical: 14, paddingHorizontal: 20, borderRadius: 16, alignItems: 'center', justifyContent: 'center', elevation: 4 },
  primary: { backgroundColor: COLORS.primary },
  danger: { backgroundColor: COLORS.danger },
  outline: { backgroundColor: COLORS.card, borderWidth: 1.5, borderColor: COLORS.primary, elevation: 0 },
  dim: { opacity: 0.5 },
  text: { color: COLORS.card, fontSize: 16, fontWeight: '600' },
  textOutline: { color: COLORS.primary },
});
