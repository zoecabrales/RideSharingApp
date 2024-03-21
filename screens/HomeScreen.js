import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMotorcycle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import dummyRideRequests from "../components/dummyRideData"; // Import dummy ride data
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [rideRequests, setRideRequests] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setRideRequests(dummyRideRequests);
  }, []);

  const handleMarkerPress = (request) => {
    navigation.navigate("RideRequestDetails", { requestId: request.id });
  };

  return (
    <View style={styles.container}>
      <MapView
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

            {/* Marker for current location */}
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
});

export default HomeScreen;
