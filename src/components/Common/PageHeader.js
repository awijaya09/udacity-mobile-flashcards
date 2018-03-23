import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class PageHeader extends Component {
    render() {
        const { headerStyle, titleStyle } = styles;
        const { pageTitle, goToPrevPage } = this.props;
        return (
            <Header style={headerStyle} iosBarStyle='light-content'>
                <Left>
                    <Button transparent onPress={() => goToPrevPage()}> 
                        <Icon name='arrow-back' style={titleStyle}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={titleStyle}>{pageTitle}</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}


const styles = {
    headerStyle : {
        backgroundColor: '#3F51B5',
    },
    titleStyle : {
        color: 'white',
    },
}