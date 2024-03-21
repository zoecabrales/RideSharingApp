import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMotorcycle,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import dummyRideRequests from "../components/dummyRideData"; // Import dummy ride data
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { setRideRequests } from "../redux/actions/rideRequestActions";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ rideRequests, setRideRequests }) => {
  const navigation = useNavigation();

  useEffect(() => {
    setRideRequests(dummyRideRequests);
  }, []);

  const handleMarkerPress = (request) => {
    navigation.navigate("RideRequestDetails", { requestId: request.id });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchIconContainer}>
          <FontAwesomeIcon icon={faSearch} color="gray" size={20} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Type a location for nearby bookings"
        />
      </View>
      <MapView
        darkModeAllowed={false}
        style={styles.map}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: width,
    height: height,
  },
  searchContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    zIndex: 1,
    elevation: 5,
    borderRadius: 50,
    opacity: 0.9,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
});

const mapStateToProps = (state) => ({
  rideRequests: state.rideRequest.rideRequests,
});

export default connect(mapStateToProps, { setRideRequests })(HomeScreen);
