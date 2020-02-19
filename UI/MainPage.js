import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import PostList from './Components/PostList';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=182f1afa57654f4bae6bb4db84907699',
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
    backgroundColor: '#C3C3C3',
  },
});
