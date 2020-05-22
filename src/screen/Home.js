import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount } from '../action';

const Home = () => {

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <View style={ styles.container }>
            <Text>Count value is {count}</Text>
            <Button 
                title="Increment count"
                onPress={() => dispatch(incrementCount())}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Home;
