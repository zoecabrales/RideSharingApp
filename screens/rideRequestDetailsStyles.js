import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/customButton";
import dummyRideRequests from "../components/DummyRideData";
import { styles } from "../styles/rideRequestDetailsStyles"; // Import the styles

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

export default RideRequestDetailsScreen;
