import React, {Component} from 'react';
import {View, SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import PostDetail from './Components/PostDetail';
import {connect} from 'react-redux';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityIndicatorView}>
          <ActivityIndicator />
        </View>
      );
    }

    if (this.props.blogPost !== null) {
      let blogArticle = this.props.blogArticle;
      this.setState({isLoading: false, blogPost: blogArticle}, function() {});
    }

    return (
      <SafeAreaView style={styles.mainSafeAreaView}>
        <View>
          <PostDetail blogPost={this.state.blogPost} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = store => ({
  blogArticle: store.selectedArticle.blogArticle,
});

export default connect(mapStateToProps)(DetailPage);

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
