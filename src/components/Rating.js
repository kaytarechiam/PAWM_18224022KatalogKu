import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme/colors';

export default function Rating({ value = 0 }) {
  const numericValue = Number(value);
  const rating = Number.isFinite(numericValue) ? Math.min(5, Math.max(0, numericValue)) : 0;
  return (
    <View style={styles.row} accessibilityLabel={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }, (_, index) => {
        const remaining = rating - index;
        const name = remaining >= 1 ? 'star' : remaining >= 0.5 ? 'star-half' : 'star-outline';
        return <Ionicons key={index} name={name} size={14} color={COLORS.accent} />;
      })}
      <Text style={styles.value}>{rating.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 2, flexWrap: 'wrap' },
  value: { color: COLORS.muted, fontSize: 11, marginLeft: 2 },
});
