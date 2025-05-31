import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://randomuser.me/api/portraits/men/75.jpg",
          }}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@example.com</Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>15 km</Text>
            <Text style={styles.statLabel}>Run Distance</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>Intermediate</Text>
            <Text style={styles.statLabel}>Fitness Level</Text>
          </View>
        </View>

        <Text style={styles.goalTitle}>Current Goal</Text>
        <Text style={styles.goalText}>
          Build muscle mass and improve endurance.
        </Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileCard: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2c3e50",
  },
  email: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 25,
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#34495e",
  },
  statLabel: {
    fontSize: 14,
    color: "#95a5a6",
    marginTop: 4,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  goalText: {
    fontSize: 15,
    color: "#7f8c8d",
    marginBottom: 25,
    alignSelf: "flex-start",
  },
  editButton: {
    backgroundColor: "#27ae60",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
