import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, List, ListItem, Text} from 'native-base';
import { title } from 'change-case';

class Home extends Component {
    render() {
        const { headerStyle, titleStyle, deckTitleStyle, deckSubtitleStyle, deckBodyStyle} = styles;
        return (
            <Container>
                <Header style={headerStyle} iosBarStyle='light-content'>
                    <Left />
                    <Body>
                        <Title style={titleStyle}>QuizCard</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='add' style={titleStyle} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <List>
                        <ListItem icon>
                            <Left><Icon name='flask' /></Left>
                            <Body>
                                <Text style={deckTitleStyle}>React Native</Text>
                                <Text note style={deckSubtitleStyle}>5 Questions</Text>
                            </Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='flame' /></Left>
                            <Body>
                                <Text style={deckTitleStyle}>Webpack</Text>
                                <Text note style={deckSubtitleStyle}>2 Questions</Text>
                            </Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='beer' /></Left>
                            <Body>
                                <Text style={deckTitleStyle}>Beer</Text>
                                <Text note style={deckSubtitleStyle}>3 Questions</Text>
                            </Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='ionic' /></Left>
                            <Body>
                                <Text style={deckTitleStyle}>Ionic</Text>
                                <Text note style={deckSubtitleStyle}>1 Questions</Text>
                            </Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='pizza' /></Left>
                            <Body>
                                <Text style={deckTitleStyle}>Pizza</Text>
                                <Text note style={deckSubtitleStyle}>3 Questions</Text>
                            </Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                    </List>
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
    deckBodyStyle: {
        paddingTop: 8,
        paddingBottom : 8,
    },
    deckTitleStyle : {
        fontWeight: 'bold',
    },
    deckSubtitleStyle : {
        fontSize: 12,
        paddingBottom: 8,
    },
}

export default Home;