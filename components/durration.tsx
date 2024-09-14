import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Durration = ({ value }: { value: number }) => {
  return (
    <View
      style={{
        width: "80%",
        height: 5,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 10,
        left: "12%",
        top: "60%",
      }}
    >
      <View
        style={{
          width: `${value}%`,
          height: 5,
          backgroundColor: "green",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: `${value}%`,

            height: 5,
            backgroundColor: "white",
            borderRadius: 100,
          }}
        ></View>
      </View>
    </View>
  );
};

export default Durration;

const styles = StyleSheet.create({});
