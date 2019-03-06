import React, { Component } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  itemContainer: {
    padding: 16
  },
  repoIcon: {
    height: 15,
    width: 15
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  nameText: {
    color: "blue",
    paddingHorizontal: 4,
    textAlignVertical: "center"
  },
  bottomContainer: {
    paddingLeft: 16
  },
  descriptionText: { paddingVertical: 4 },
  starIcon: {
    height: 15,
    width: 15
  },
  starText: {
    paddingHorizontal: 4
  },
  header: {
    backgroundColor: "black"
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16
  },
  headerIcon: {
    height: 20,
    width: 20
  },
  headerIconBig: {
    height: 30,
    width: 30
  },
  searchBar: {
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    marginHorizontal: 8,
    height: 30,
    fontSize: 13,
    padding: 0,
    paddingHorizontal: 4
  },
  seperator: {
    backgroundColor: "black",
    opacity: 0.5,
    height: 0.5,
    paddingHorizontal: 20
  }
});

export default styles;
