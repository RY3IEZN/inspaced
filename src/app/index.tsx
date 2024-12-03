/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <Text className="font-bold text-3xl p-10 color-purple-700 bg-red-500">
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
