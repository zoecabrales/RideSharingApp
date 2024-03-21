// HomeScreen.js
import React, { useEffect } from "react";
import { View, TextInput, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMotorcycle,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setRideRequests } from "../redux/actions/rideRequestActions";
import { useNavigation } from "@react-navigation/native";
import { homeScreenStyles } from "./homeScreenStyles"; // Import the styles
import dummyRideRequests from "../components/DummyRideData"; // Import dummy ride data

const HomeScreen = ({
  rideRequests,
  setRideRequests,
  pickupAddress,
  destinationAddress,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    setRideRequests(dummyRideRequests);
  }, []);

  const handleMarkerPress = (request) => {
    navigation.navigate("RideRequestDetails", {
      requestId: request.id,
      pickupAddress: "123 Main St, City, Country",
      destinationAddress: "456 Elm St, City, Country",
    });
  };

  return (
    <View style={homeScreenStyles.container}>
      <StatusBar hidden={true} />
      <View style={homeScreenStyles.searchContainer}>
        <FontAwesomeIcon
          icon={faSearch}
          color="gray"
          size={20}
          style={homeScreenStyles.searchIconContainer}
        />
        <TextInput
          style={homeScreenStyles.searchInput}
          placeholder="Type a location for nearby bookings"
        />
      </View>
      <MapView
        darkModeAllowed={false}
        style={homeScreenStyles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {rideRequests.map((request, index) => (
          <React.Fragment key={`markerGroup_${index}`}>
            {/* Marker for ride request */}
            <Marker
              key={`rideRequest_${request.id}`}
              coordinate={{
                latitude: request.pickupLocation.latitude,
                longitude: request.pickupLocation.longitude,
              }}
              title="Ride Request"
              description={`Status: ${request.status}`}
              onPress={() => handleMarkerPress(request)}
            >
              <FontAwesomeIcon
                icon={faMotorcycle}
                color={request.status === "pending" ? "blue" : "red"}
                size={30}
              />
            </Marker>

            <Marker
              key={`currentLocation_${request.id}`}
              coordinate={{ latitude: 37.78125, longitude: -122.445 }} // Replace with your mock location
              title="Current Location"
              description="This is your current location"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} color="orange" size={30} />
            </Marker>
          </React.Fragment>
        ))}
      </MapView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  rideRequests: state.rideRequest.rideRequests,
});

export default connect(mapStateToProps, { setRideRequests })(HomeScreen);
