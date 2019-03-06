import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { _fetchRepos, _changeSearchTerm } from "./actions";

import { Header } from "./components";
import styles from "./styles";

const colors = ["red", "yellow", "blue", "orange", "grey"];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const RowItem = ({ name, description, stars, language }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemHeader}>
      <Image
        style={styles.repoIcon}
        source={require("../../images/ic_repo.png")}
      />
      <Text style={styles.nameText}>{name}</Text>
    </View>
    <View style={styles.bottomContainer}>
      <Text style={styles.descriptionText}>{description}</Text>

      <View style={styles.itemHeader}>
        <View style={styles.itemHeader}>
          <Image
            style={styles.starIcon}
            source={require("../../images/ic_star.png")}
          />
          <Text style={styles.starText}>{stars}</Text>
        </View>
        {language && (
          <View style={styles.itemHeader}>
            <View
              style={[
                styles.starIcon,
                {
                  borderRadius: 20,
                  backgroundColor: getRandomColor(),
                  marginHorizontal: 8
                }
              ]}
            />
            <Text style={styles.starText}>{language}</Text>
          </View>
        )}
      </View>
    </View>
  </View>
);

class Repos extends Component {
  state = { repos: [] };

  componentDidMount() {
    this.setState({
      repos: this.props.fetchRepos()
    });
    this.props.fetchRepos();
  }

  getFilteredResults = searchTerm => {
    let { repos } = this.props;
    return repos.filter(
      item => new RegExp(`\\b${searchTerm}`, "gi").test(item.name.split("/")[1])
      // new RegExp(`${searchTerm}`, "gi").test(item[searchProperty])
    );
  };

  render() {
    const { repos, searchTerm, isLoading } = this.props;
    const filteredRepos = this.getFilteredResults(searchTerm);

    const reposToshow = searchTerm ? filteredRepos : repos;
    return (
      <View>
        {/* <Text style={{ marginTop: 100 }}>{searchTerm}</Text> */}
        {reposToshow && reposToshow.length > 0 ? (
          <FlatList
            data={reposToshow}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            renderItem={({ item }) => <RowItem {...item} />}
          />
        ) : (
          <View style={styles.container}>
            <Text>{isLoading ? "Loading..." : "No repository!!"}</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos.repos,
    searchTerm: state.repos.searchTerm,
    isLoading: state.repos.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: () => dispatch(_fetchRepos())
  };
};

const connectedRepos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);

const DummyScreen = ({ name }) => (
  <View style={styles.container}>
    <Text>Screen</Text>
  </View>
);

const Tabs = createMaterialTopTabNavigator(
  {
    Overview: DummyScreen,
    Repositories: connectedRepos,
    Projects: DummyScreen,
    Stars: DummyScreen,
    Followers: DummyScreen,
    Followings: DummyScreen
  },
  {
    initialRouteName: "Repositories",
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        fontSize: 12,
        color: "white"
      },
      tabStyle: {
        //width: Dimensions.get("window").width / 4
      },
      style: {
        backgroundColor: "black"
      },
      indicatorStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);

Tabs.navigationOptions = {
  header: <Header />
};

const App = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Tabs
    }
  })
);
export default App;
