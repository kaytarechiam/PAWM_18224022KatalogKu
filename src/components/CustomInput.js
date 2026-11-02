import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from '../theme/colors';

export default function CustomInput({ label, error, icon, ...rest }) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.field, error && styles.fieldError]}>
        {icon ? <Ionicons name={icon} size={20} color={COLORS.muted} style={styles.icon} /> : null}
        <TextInput {...rest} style={[styles.input, rest.style]} placeholderTextColor={rest.placeholderTextColor || COLORS.muted} />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { marginBottom: 6, color: COLORS.text, fontSize: 14, fontWeight: '600' },
  field: { minHeight: 52, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: COLORS.border, borderRadius: 16, backgroundColor: COLORS.card, elevation: 2, shadowColor: COLORS.primary, shadowOpacity: 0.05, shadowRadius: 5, shadowOffset: { width: 0, height: 3 } },
  fieldError: { borderColor: COLORS.danger },
  icon: { marginRight: 8 },
  input: { flex: 1, paddingVertical: 10, fontSize: 15, color: COLORS.text },
  error: { marginTop: 4, color: COLORS.danger, fontSize: 12 },
});
