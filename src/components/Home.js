import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Text, Card, CardItem, Grid, Col, Spinner} from 'native-base';
import { title } from 'change-case';
import AddNewDeck from './AddNewDeck';
import DeckSingle from './DeckSingle';

// Getting initial Data
import InitialData from '../TestData.json';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { fetchAllDecks } from '../actions';
import _ from 'lodash';

class Home extends Component {

    constructor(props) {
        super(props);
        this.goToDetail = this.goToDetail.bind(this);
    }

    componentWillMount() {
        // AsyncStorage.removeItem('decks');
        AsyncStorage.getItem('decks', (error, data) => {
            if (data === null) {
                AsyncStorage.setItem('decks', JSON.stringify(InitialData));
                this.props.fetchAllDecks();
            }
        });
        this.props.fetchAllDecks();
    }

    goToDetail() {
        this.props.navigation.navigate('DetailDeck');
    }

    renderContent() {
        const { decks } = this.props;
        if(!decks) {
            return (
                <View>
                    <Spinner color={'blue'} />
                </View>
            )
        }
        return (
            
            <Grid>
                <DeckSingle itemTitle={'React'} itemIcon={'flame'} itemQuestionsCount={3} onItemClick={() => this.goToDetail()}/>
            </Grid>
        )
        
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
                    {this.renderContent()}
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

function mapStateToProps({ decks }) {
    return { decks };
}

export default connect(mapStateToProps, { fetchAllDecks })(Home);