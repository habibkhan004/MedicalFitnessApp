import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    services: "Heart check-ups, ECG, Blood pressure management",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Adeel Khan",
    specialty: "Nutritionist",
    services: "Diet planning, Weight loss programs, Lifestyle coaching",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Dr. Amna Tariq",
    specialty: "Physiotherapist",
    services: "Rehabilitation, Joint pain, Sports injuries",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Bilal Saeed",
    specialty: "General Physician",
    services: "Cold, Flu, General health consultations",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Dr. Maria Yousuf",
    specialty: "Dermatologist",
    services: "Skin treatment, Acne, Anti-aging care",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

export default function ViewDoctorsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👨‍⚕️ Available Doctors</Text>
      {doctors.map((doc, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: doc.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{doc.name}</Text>
            <Text style={styles.specialty}>Specialty: {doc.specialty}</Text>
            <Text style={styles.services}>Services: {doc.services}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f4f7",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
  },
  specialty: {
    fontSize: 14,
    marginTop: 5,
    color: "#7f8c8d",
  },
  services: {
    fontSize: 13,
    marginTop: 5,
    color: "#95a5a6",
  },
});
