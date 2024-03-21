import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import CustomButton from "../components/customButton";
import dummyRideRequests from "../components/DummyRideData";
import { styles as rideRequestStyles } from "./rideRequestDetailsStyles"; // Import the styles
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const RideRequestDetailsScreen = ({ route }) => {
  const { requestId } = route.params;
  const navigation = useNavigation(); // Initialize navigation

  const rideRequest = dummyRideRequests.find(
    (request) => request.id === requestId
  );

  const [modalVisible, setModalVisible] = useState(false);

  const handleAcceptBooking = () => {
    setModalVisible(true);
  };

  const handleGoToMap = () => {
    navigation.navigate("Home");
    setModalVisible(false);
  };

  const handleDecline = () => {
    setModalVisible(false);
  };

  return (
    <View style={rideRequestStyles.container}>
      <Text style={rideRequestStyles.screenTitle}>
        Accept a booking right away!
      </Text>
      <Text style={rideRequestStyles.note}>
        You can't accept a booking unless it's pending.{"\n"}
        But hey! Keep looking, there's always a booking any minute now!
      </Text>
      <View style={rideRequestStyles.infoContainer}>
        <View style={rideRequestStyles.textContainer}>
          <Text style={rideRequestStyles.label}>Ride ID:</Text>
          <Text style={rideRequestStyles.info}>{rideRequest.id}</Text>
        </View>
        <View style={rideRequestStyles.textContainer}>
          <Text style={rideRequestStyles.label}>Status:</Text>
          <Text style={rideRequestStyles.info}>{rideRequest.status}</Text>
        </View>
        <View style={rideRequestStyles.textContainer}>
          <Text style={rideRequestStyles.label}>PickUp:</Text>
          <Text style={rideRequestStyles.info}>
            {rideRequest.pickupLocation.latitude},{" "}
            {rideRequest.pickupLocation.longitude}
          </Text>
        </View>
        <View style={rideRequestStyles.textContainer}>
          <Text style={rideRequestStyles.label}>Destination:</Text>
          <Text style={rideRequestStyles.info}>
            {rideRequest.destination.latitude},{" "}
            {rideRequest.destination.longitude}
          </Text>
        </View>
      </View>
      <CustomButton
        onPress={handleAcceptBooking}
        disabled={rideRequest.status !== "pending"}
        title="Accept Booking"
        backgroundColor="#0077CC"
      />
      {/* Modal component */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={rideRequestStyles.modalCenteredView}>
          <View style={rideRequestStyles.modalView}>
            <Text style={rideRequestStyles.modalText}>
              You have successfully accepted the booking!
            </Text>
            <View style={rideRequestStyles.buttonContainer}>
              <CustomButton
                onPress={handleGoToMap}
                title="Go to Map"
                backgroundColor="#0077CC"
              />
              <CustomButton
                onPress={handleDecline}
                title="Decline"
                backgroundColor="#FF0000"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RideRequestDetailsScreen;
