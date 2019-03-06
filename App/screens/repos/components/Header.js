import React, { Component } from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import { connect } from "react-redux";

import styles from "../styles";
import { _changeSearchTerm } from "../actions";

class Header extends Component {
  state = { isSearchVisible: false };
  render() {
    const { changeSearchTerm } = this.props;
    const { isSearchVisible } = this.state;
    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() =>
              this.setState(prevState => ({
                isSearchVisible: !prevState.isSearchVisible
              }))
            }
          >
            <Image
              style={styles.headerIconBig}
              source={require("../../../images/ic_menu.png")}
            />
          </TouchableOpacity>
          <Image
            style={styles.headerIconBig}
            source={require("../../../images/ic_github.png")}
          />
          <Image
            style={styles.headerIcon}
            source={require("../../../images/ic_bell.png")}
          />
        </View>
        {isSearchVisible && (
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            onChangeText={text => changeSearchTerm(text)}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps1 = state => {
  return {};
};

const mapDispatchToProps1 = dispatch => {
  return {
    changeSearchTerm: searchTerm => dispatch(_changeSearchTerm(searchTerm))
  };
};

export default connect(
  mapStateToProps1,
  mapDispatchToProps1
)(Header);
