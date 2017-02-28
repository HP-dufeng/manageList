import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component{
    buttonPressHandler() {
        Actions.main();
    }

    renderButton() {
        // if (this.state.loading) {
        //     return <Spinner size="small" />;
        // }

        return (
            <Button onPress={this.buttonPressHandler.bind(this)}>
                Log in
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                <Input
                    placeholder="user@gmail.com"
                    label="Email"
                />
                </CardSection>

                <CardSection>
                <Input
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                {/*{this.state.error}*/}
                </Text>

                <CardSection>
                {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
