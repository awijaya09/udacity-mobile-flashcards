import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Text, Card, CardItem, Grid, Col} from 'native-base';
import { title } from 'change-case';
import AddNewDeck from './AddNewDeck';
import DeckSingle from './DeckSingle';

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
                        <DeckSingle itemTitle={'Webpack'} itemIcon={'flame'} itemQuestionsCount={3} onItemClick={() => this.goToDetail()}/>
                        <DeckSingle itemTitle={'React Native'} itemIcon={'pizza'} itemQuestionsCount={5} onItemClick={() => this.goToDetail()}/>
                    </Grid>
                    <Grid>
                        <DeckSingle itemTitle={'Udacity'} itemIcon={'book'} itemQuestionsCount={5} onItemClick={() => this.goToDetail()}/>
                        <DeckSingle itemTitle={'Rolex'} itemIcon={'watch'} itemQuestionsCount={5} onItemClick={() => this.goToDetail()}/>
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
}

export default Home;