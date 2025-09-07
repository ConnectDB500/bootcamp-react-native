import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    flexDirection: "column",
    borderColor: "#ffffff",
    borderWidth: 2, 
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: "#4D4D4D"
  },

  inputContainer: {
    width: "80%",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2
  }
});

export default styles