import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectedArticle from './../../Redux/BlogAction';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {blogArticle: undefined};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          selectedArticle(this.props.blogPost);
          Navigation.push(this.props.componentId, {
            component: {name: 'DetailScreen'},
          });
        }}>
        <View style={styles.mainView}>
          <Text style={styles.textTitle}>{this.props.blogPost.title}</Text>
          <View style={styles.horizontalView}>
            <Image
              source={{uri: this.props.blogPost.urlToImage}}
              style={styles.postImage}
            />
            <Text style={styles.textDescription}>
              {this.props.blogPost.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({selectedArticle}, dispatch);

export default connect(mapDispatchToProps)(PostItem);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#F6F6F6',
  },
  horizontalView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  textTitle: {
    flex: 1,
    fontSize: 20,
    color: '#222222',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textDescription: {
    flex: 2,
    fontSize: 16,
    color: '#424242',
    textAlign: 'left',
  },
  postImage: {
    flex: 1,
    resizeMode: 'cover',
    marginRight: 10,
  },
});
