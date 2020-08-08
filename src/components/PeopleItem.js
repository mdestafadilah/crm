import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';

// action
import * as actions from '../actions';

const theme = getTheme();

const PeopleItem = (props) => {
  return (
    <View>
      <Image />
      <Icon />
      <Text>
        {props.people.firstName}
        {props.people.lastName}
      </Text>
      <Text>{props.people.company}</Text>
    </View>
  );
};

export default connect(null, actions)(PeopleItem);

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 20,
    fontSize: 24,
  },
  image: {
    height: 100,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});
