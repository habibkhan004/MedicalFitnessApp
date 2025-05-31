import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Medical Fitness App</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#777"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#777"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
          activeOpacity={0.7}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#777"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => alert("Forgot password flow")}
        style={styles.forgotPasswordContainer}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Dashboard")}
        activeOpacity={0.8}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: "#db4a39" }]}
          onPress={() => alert("Google Login")}
          activeOpacity={0.8}
        >
          <FontAwesome name="google" size={20} color="#fff" />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
          onPress={() => alert("Facebook Login")}
          activeOpacity={0.8}
        >
          <FontAwesome name="facebook" size={20} color="#fff" />
          <Text style={styles.socialButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.registerContainer}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerText}>
          Don't have an account?{" "}
          <Text style={{ color: "#27ae60", fontWeight: "bold" }}>Register</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  eyeIcon: {
    padding: 5,
  },
  input: {
    flex: 1,
    height: 48,
    color: "#333",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: "#27ae60",
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#27ae60",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#27ae60",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#7f8c8d",
    fontWeight: "600",
  },
  socialLoginContainer: {
    marginBottom: 30,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 7,
    justifyContent: "center",
  },
  socialButtonText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 12,
    fontSize: 16,
  },
  registerContainer: {
    alignItems: "center",
  },
  registerText: {
    fontSize: 15,
    color: "#7f8c8d",
  },
});
