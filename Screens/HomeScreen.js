import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const features = [
    {
      title: "Workout Plans",
      icon: "💪",
      description: "Customized plans for all levels",
    },
    {
      title: "Nutrition Guide",
      icon: "🥗",
      description: "Healthy meals to fuel your body",
    },
    {
      title: "Sleep Tracker",
      icon: "🛌",
      description: "Monitor your sleep patterns",
    },
    {
      title: "Step Counter",
      icon: "👟",
      description: "Track your daily steps easily",
    },
    {
      title: "Water Intake",
      icon: "💧",
      description: "Stay hydrated throughout the day",
    },
    {
      title: "Yoga Sessions",
      icon: "🧘‍♀️",
      description: "Relax with guided yoga routines",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>🏋️‍♂️ Welcome to HealthNet</Text>
        <Text style={styles.subtitle}>
          Your companion for better health and fitness
        </Text>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
          style={styles.image}
        />
      </View>

      <Text style={styles.sectionTitle}>Today’s Motivation</Text>
      <Text style={styles.motivation}>
        “Push yourself, because no one else is going to do it for you.” 💪
      </Text>

      <Text style={styles.sectionTitle}>Explore Features</Text>
      <View style={styles.cardContainer}>
        {features.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  hero: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#34495e",
  },
  motivation: {
    fontSize: 16,
    color: "#444",
    fontStyle: "italic",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
  },
  cardDescription: {
    fontSize: 13,
    color: "#7f8c8d",
    marginTop: 5,
  },
});
