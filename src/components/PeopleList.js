import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';

class PeopeList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'user'} size={50} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.people}>
        <FlatList
          data={this.props.people}
          renderItem={({item}) => <PeopleItem people={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {people: state.people};
};

export default connect(mapStateToProps)(PeopeList);

const styles = StyleSheet.create({
  people: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});
