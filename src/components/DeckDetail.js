import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Text, Grid, Col} from 'native-base';
import { title } from 'change-case';

class DetailDeck extends Component { 
    render() {
        const { goBack } = this.props.navigation;
        const { headerStyle, titleStyle, contentStyle, deckTitleStyle, deckSubtitleStyle, buttonStyle} = styles;
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
                <Content contentContainerStyle={contentStyle}>
                    <Icon name='flame' style={{fontSize: 150}}/>
                    <Text style={deckTitleStyle}>Webpack</Text>
                    <Text style={[deckSubtitleStyle, {marginBottom: 48}]}>3 Questions</Text>
                    <Button full dark style={buttonStyle}>
                        <Text>Start quiz</Text>
                    </Button>
                    <Button full bordered dark style={buttonStyle}>
                        <Text>Add a new question</Text>
                    </Button>
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
    contentStyle: {
        alignItems: 'center',
        marginTop: 32,
        flex: 1,
    },
    deckTitleStyle : {
        fontWeight: 'bold',
        fontSize: 48,
    },
    deckSubtitleStyle : {
        fontSize: 24,
        color: 'grey',
        fontWeight: '100'
    },
    buttonStyle: {
        marginLeft: 24, 
        marginRight: 24,
        marginTop: 8,
    }
}

export default DetailDeck;