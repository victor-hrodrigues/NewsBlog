import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import PostList from './Components/PostList';
import { connect } from 'react-redux';
import { fetchArticleList } from '../Redux/Blog.actions';

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchArticleList();
  }

  render() {
    return (
      <SafeAreaView style={styles.mainSafeAreaView}>
        <PostList blogPosts={this.props.blogPosts} />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogPosts: state.posts,
  };
}

export default connect(mapStateToProps, { fetchArticleList })(MainPage);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  }
});
