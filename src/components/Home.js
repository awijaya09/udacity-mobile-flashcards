import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Text, Card, CardItem, Grid, Col} from 'native-base';
import { title } from 'change-case';
import AddNewDeck from './AddNewDeck';

class Home extends Component {

    constructor(props) {
        super(props);
        this.goToDetail = this.goToDetail.bind(this);
    }

    goToDetail() {
        this.props.navigation.navigate('DetailDeck');
    }

    render() {
        const { headerStyle, titleStyle, deckTitleStyle, deckSubtitleStyle, deckBodyStyle, deckIconStyle} = styles;
        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Header style={headerStyle} iosBarStyle='light-content'>
                    <Left />
                    <Body>
                        <Title style={titleStyle}>QuizCard</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => navigate('NewDeck')}>
                            <Icon name='add' style={titleStyle} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Grid>
                        <Col>
                            <Card>
                                <CardItem button onPress={() => this.goToDetail()}>
                                    <Body style={deckBodyStyle}>
                                        <Icon name='flask' style={deckIconStyle}/>
                                        <Text style={deckTitleStyle}>React Native</Text>
                                        <Text style={deckSubtitleStyle}>5 Questions</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardItem button onPress={() => this.goToDetail()}>
                                    <Body style={deckBodyStyle}>
                                        <Icon name='flame' style={deckIconStyle}/>
                                        <Text style={deckTitleStyle}>Webpack</Text>
                                        <Text style={deckSubtitleStyle}>3 Questions</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Col>
                    </Grid>
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
    deckIconStyle: {
        alignSelf: 'center',
        fontSize: 50,
    },
    deckBodyStyle: {
        paddingTop: 20,
        paddingBottom : 20,
        alignItems: 'center'
    },
    deckTitleStyle : {
        fontWeight: 'bold',
    },
    deckSubtitleStyle : {
        fontSize: 12,
        color: 'grey',
        fontWeight: '100'
    },
}

export default Home;