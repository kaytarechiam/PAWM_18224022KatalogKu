import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../theme/colors';

export default function HeaderBar({ title, subtitle, onBack }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.bar, { paddingTop: insets.top + 12 }]}>
      {onBack ? <Pressable accessibilityRole="button" accessibilityLabel="Kembali" onPress={onBack} hitSlop={10} style={styles.back}><Ionicons name="chevron-back" size={24} color={COLORS.card} /></Pressable> : null}
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.primary, paddingHorizontal: 16, paddingBottom: 20, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, elevation: 5, shadowColor: COLORS.primary, shadowOpacity: 0.1, shadowRadius: 10, shadowOffset: { width: 0, height: 8 } },
  back: { marginRight: 12 },
  titles: { flex: 1 },
  title: { color: COLORS.card, fontSize: 20, lineHeight: 28, fontWeight: '600' },
  subtitle: { color: COLORS.card, opacity: 0.82, fontSize: 13, lineHeight: 18, marginTop: 4 },
});
