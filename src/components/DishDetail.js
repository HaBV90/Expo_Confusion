import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderDish = (props) => {

  const dish = props.dish;

  if (dish != null) {
    return(
      <Card
        featuredTitle={dish.name}
        image={require('../assets/images/uthappizza.png')}>
        <Text style={{margin: 10}}>
          {dish.description}
        </Text>
      </Card>
    );
  }
  else {
    return(<View></View>);
  }
}

const DishDetail = (props) => {
  return(<RenderDish dish={props.dish} />);
}

export default DishDetail;