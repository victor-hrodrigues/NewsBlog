import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import PostDetail from './Components/PostDetail';

export default class DetailPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainSafeAreaView}>
        <View>
          <PostDetail blogPost={this.props.blogPost} />
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
