import React, { Component } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import PostList from './Components/PostList';
import { connect } from 'react-redux';
import { fetchArticleList } from '../Redux/Blog.actions';

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchArticleList();
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.loadingMainView}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <SafeAreaView style={styles.mainSafeAreaView}>
        <PostList blogPosts={this.props.blogPosts} />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.blog.loading,
    blogPosts: state.blog.posts
  };
}

export default connect(mapStateToProps, { fetchArticleList })(MainPage);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  loadingMainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  }
});
