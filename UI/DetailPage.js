import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PostDetail from './Components/PostDetail';
import { connect } from 'react-redux';

class DetailPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainSafeAreaView}>
        <PostDetail blogArticle={this.props.article} />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.blog.article,
  };
}

export default connect(mapStateToProps)(DetailPage);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  }
});
