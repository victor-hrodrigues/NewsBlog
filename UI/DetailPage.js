import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import PostDetail from './Components/PostDetail';
import { connect } from 'react-redux';

class DetailPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainSafeAreaView}>
        <View>
          <PostDetail blogArticle={this.props.article} />
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article,
  };
}

export default connect(mapStateToProps)(DetailPage);

const styles = StyleSheet.create({
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  }
});
