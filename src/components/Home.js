import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, List, ListItem, Text} from 'native-base';
import { title } from 'change-case';

class Home extends Component {
    render() {
        const { headerStyle, titleStyle } = styles;
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
                            <Body><Text>React Native</Text></Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='flame' /></Left>
                            <Body><Text>Webpack</Text></Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='beer' /></Left>
                            <Body><Text>Beer</Text></Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='ionic' /></Left>
                            <Body><Text>Ionic</Text></Body>
                            <Right><Icon name='arrow-forward' /></Right>
                        </ListItem>
                        <ListItem icon>
                            <Left><Icon name='pizza' /></Left>
                            <Body><Text>Pizza</Text></Body>
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
    }
}

export default Home;