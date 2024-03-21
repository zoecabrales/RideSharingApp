import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/customButton"; // Import the CustomButton component
import dummyRideRequests from "../components/DummyRideData";

const RideRequestDetailsScreen = ({ route }) => {
  const { requestId } = route.params;
  const rideRequest = dummyRideRequests.find(
    (request) => request.id === requestId
  );

  const handleAcceptBooking = () => {
    console.log("Booking accepted");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Accept a booking right away!</Text>
      <Text style={styles.note}>
        You can't accept a booking unless it's pending. But hey, keep looking,
        there could be a booking any minute now!
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Ride ID:</Text>
          <Text style={styles.info}>{rideRequest.id}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.info}>{rideRequest.status}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>PickUp:</Text>
          <Text style={styles.info}>
            {rideRequest.pickupLocation.latitude},{" "}
            {rideRequest.pickupLocation.longitude}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Destination:</Text>
          <Text style={styles.info}>
            {rideRequest.destination.latitude},{" "}
            {rideRequest.destination.longitude}
          </Text>
        </View>
      </View>
      <CustomButton
        onPress={handleAcceptBooking}
        disabled={rideRequest.status !== "pending"}
        title="Accept Booking"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  note: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
  },
  infoContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  info: {
    fontSize: 16,
  },
});

export default RideRequestDetailsScreen;
