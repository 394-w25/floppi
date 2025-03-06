import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image, ScrollView } from "react-native";

interface ChatbotModalProps {
  visible: boolean;
  onClose: () => void;
}

const { width, height } = Dimensions.get('window'); 

const ChatbotModal: React.FC<ChatbotModalProps> = ({ visible, onClose }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            <Image source={require("../../assets/images/bridge-chat.png")} style={styles.image} />
            <Text style={styles.title}>Bridget</Text>
            <Text style={styles.subtitle}>Prep for interviews whenever and wherever</Text>
          </View>
        
          <ScrollView style={styles.chatContainer}>
            <Text style={styles.chatText}>
              Alright, you've got a job opportunity in sight—let's make sure you shine!
              I've broken down the role and compared it with your experiences.
            </Text>
            <Text style={styles.chatText}>✅ Understand what this job really needs</Text>
            <Text style={styles.chatText}>✅ Highlight your best skills for it</Text>
            <Text style={styles.chatText}>✅ Prepare with interview questions that might come up</Text>
            {messages.map((message, index) => (
              <View key={index} style={styles.userMessage}>
                <Text style={styles.userMessageText}>{message}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width,
    height: height - 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    top: 30,
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  closeText: {
    fontSize: 24,
  },
  headerContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
    fontFamily: "Nunito",
    color: "#517FA5",
  },
  subtitle: {
    fontSize: 12,
    color: "#606060",
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito",
  },
  chatContainer: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: width - 40,
  },
  chatText: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "Nunito",
  },
  userMessage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 10,
    backgroundColor: "#517FA5",
    boxShadow: "0px 2px 4px rgba(27, 28, 29, 0.04)",
    borderRadius: 16,
    marginVertical: 5,
    alignSelf: "flex-end",
  },
  userMessageText: {
    color: "#FFFFFF",
    fontFamily: "Nunito",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    width: 250,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Nunito",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: width - 40,
  },
  input: {
    backgroundColor: "#E6E6E6",
    flex: 1,
    height: 38,
    fontFamily: "Nunito",
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  sendButton: {
    backgroundColor: "#517FA5",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontFamily: "Nunito",
  },
});

export default ChatbotModal;
