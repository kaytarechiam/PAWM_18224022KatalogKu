import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme/colors';
import Rating from './Rating';

export default function Card({ title, price, image, onPress, discount, rating }) {
  const source = typeof image === 'string' ? { uri: image } : image;
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={source} style={styles.image} />
        {discount != null && discount !== false ? <View style={styles.badge}><Text style={styles.badgeText}>-{discount}%</Text></View> : null}
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
        {rating != null ? <Rating value={rating} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 6, backgroundColor: COLORS.card, borderRadius: 20, overflow: 'hidden', elevation: 4, shadowColor: COLORS.primary, shadowOpacity: 0.09, shadowRadius: 10, shadowOffset: { width: 0, height: 8 } },
  imageWrapper: { width: '100%', aspectRatio: 1 },
  image: { width: '100%', height: '100%', backgroundColor: COLORS.background },
  body: { padding: 12, gap: 8 },
  title: { color: COLORS.text, fontSize: 14, lineHeight: 20, minHeight: 40 },
  price: { color: COLORS.accent, fontSize: 16, fontWeight: '600' },
  badge: { position: 'absolute', top: 8, left: 8, backgroundColor: COLORS.danger, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 },
  badgeText: { color: COLORS.card, fontSize: 12, fontWeight: '600' },
});
