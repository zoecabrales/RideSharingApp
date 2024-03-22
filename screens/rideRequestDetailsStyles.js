import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    ...Platform.select({
      ios: {
        marginTop: StatusBar.currentHeight + (Platform.OS === "ios" ? 30 : 0),
      },
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#0077CC",
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
    color: "#0077CC",
    textAlign: "center",
  },
  note: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 50,
  },
  infoContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    marginBottom: 200,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
    color: "#0077CC",
  },
  info: {
    fontSize: 16,
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#808080aa", // Background color for the overlay
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  customButton: {
    marginHorizontal: 40,
    height: 40,
    width: "auto",
  },
});
