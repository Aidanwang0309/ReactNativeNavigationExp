/**
 * Created by shuaiwang on 3/15/18.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner} from './common';

class LogInForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const { email, password } = this.props
        this.props.loginUser({ email, password });
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return(
            <Button
                onPress={ this.onButtonPress.bind(this)}
            >
                Login
            </Button>
        )
    }

    renderError(){
        if(this.props.error){
            return(
              <View
                style = {{ backgroundColor:'white' }}
              >
                  <Text style ={ styles.errorTextStyle }>
                      { this.props.error}
                  </Text>
              </View>
            );
        }
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        label="Email"
                        placeholder="email@test.com"
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        label="password"
                        placeholder="password"
                        value={ this.props.password }
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading }
};

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default connect(mapStateToProps,{ emailChanged, passwordChanged, loginUser })(LogInForm);