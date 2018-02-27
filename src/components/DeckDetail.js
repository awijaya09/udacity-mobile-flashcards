import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Text, Grid, Col} from 'native-base';
import { title } from 'change-case';

class DetailDeck extends Component { 
    render() {
        const { goBack } = this.props.navigation;
        const { headerStyle, titleStyle } = styles;
        return(
            <Container>
                <Header style={headerStyle} iosBarStyle='light-content'>
                    <Left>
                        <Button transparent onPress={() => goBack()}> 
                            <Icon name='arrow-back' style={titleStyle}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={titleStyle}>Detail Card</Title>
                    </Body>
                   <Right />
                </Header>
                <Content>

                </Content>
            </Container>
        )
    }
}

const styles = {
    headerStyle : {
        backgroundColor: '#01579B',
    },
    titleStyle : {
        color: 'white',
    },
}

export default DetailDeck;