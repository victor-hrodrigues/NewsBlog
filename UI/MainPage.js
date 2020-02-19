import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import PostList from './Components/PostList';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch(
      'https://newsapi.org/v2/top-headlines?country=br&apiKey=182f1afa57654f4bae6bb4db84907699',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityIndicatorView}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.mainSafeAreaView}>
        <View>
          <PostList blogPosts={this.state.dataSource} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  activityIndicatorView: {
    flex: 1,
    backgroundColor: '#C3C3C3',
    padding: 20,
  },
});
