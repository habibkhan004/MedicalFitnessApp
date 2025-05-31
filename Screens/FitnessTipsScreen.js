import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const tips = [
  {
    title: "💧 Stay Hydrated",
    description:
      "Drink water before, during, and after workouts to stay energized.",
    image:
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "🧘 Warm Up",
    description: "Warming up increases blood flow and reduces risk of injury.",
    image:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "😴 Sleep Well",
    description: "Get at least 7–8 hours of sleep to allow muscle recovery.",
    image:
      "https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "🥗 Eat Healthy",
    description:
      "Include vegetables, fruits, protein, and whole grains in your diet.",
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "📅 Be Consistent",
    description: "Stick to a routine. Progress takes time, but it’s worth it.",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const screenWidth = Dimensions.get("window").width;

export default function FitnessTipsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🏃 Fitness Tips</Text>

      {/* Horizontal image slider */}
      <FlatList
        data={tips}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.slider}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.sliderImage} />
        )}
      />

      {/* Tip cards */}
      {tips.map((tip, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: tip.image }} style={styles.cardImage} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{tip.title}</Text>
            <Text style={styles.cardDesc}>{tip.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f0f4f7",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 15,
  },
  slider: {
    marginBottom: 20,
  },
  sliderImage: {
    width: screenWidth - 30,
    height: 200,
    borderRadius: 15,
    marginRight: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  textContainer: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
  },
  cardDesc: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 5,
  },
});
