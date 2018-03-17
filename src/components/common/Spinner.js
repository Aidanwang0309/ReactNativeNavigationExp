/**
 * Created by shuaiwang on 3/9/18.
 */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({ size }) => {
    return (
      <View style = { styles.spinnerStyle }>
          <ActivityIndicator size= {size} />
      </View>
    );
};

const styles = {
    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
};

export { Spinner };