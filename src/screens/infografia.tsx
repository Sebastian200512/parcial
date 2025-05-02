import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, Linking } from 'react-native';

interface Card {
  id: string;
  title: string;
  imageUrl: string;
  linkUrl: string;
}

const cards: Card[] = [
  {
    id: '1',
    title: 'Formula 1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png',
    linkUrl: 'https://www.formula1.com/',
  },
  {
    id: '2',
    title: 'Premier League',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    linkUrl: 'https://www.premierleague.com/',
    
  },
  {
    id: '3',
    title: 'MOTO GP',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/moto-gp.svg',
    linkUrl: 'https://www.motogp.com/en',
  },
];

const chunkArray = (arr: Card[], size: number): Card[][] => {
  const result: Card[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const InfographicScreen: React.FC = () => {
  const rows = chunkArray(cards, 2); // 2 cards per row

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.cardRow}>
            {row.map((item) => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="contain" />
                <Button title="Visitar" onPress={() => Linking.openURL(item.linkUrl)} />
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#e8f0fe',
  },
  cardContainer: {
    flexDirection: 'column',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
});

export default InfographicScreen;
