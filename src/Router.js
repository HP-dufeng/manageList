import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends Component {
    render() {
        return(
            <Router sceneStyle={styles.containerStyle}>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Login'/>
                </Scene>
                <Scene key='main'>
                    <Scene 
                        key='employeeList' 
                        component={EmployeeList} 
                        title='Employee List'
                        rightTitle='ADD'
                        onRight={() => Actions.employeeCreate()}
                    />
                    <Scene key='employeeCreate' component={EmployeeCreate} title='Employee Create'/>
                </Scene>
            </Router>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 65
    }
}

export default RouterComponent;

