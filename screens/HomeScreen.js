import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import dummyRideRequests from "../components/DummyRideData"; // Import dummy ride data

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    setRideRequests(dummyRideRequests);
  }, []);

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
        {rideRequests.map((request) => (
          <Marker
            key={request.id}
            coordinate={{
              latitude: request.pickupLocation.latitude,
              longitude: request.pickupLocation.longitude,
            }}
            title="Ride Request"
            description={`Status: ${request.status}`}
          />
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
