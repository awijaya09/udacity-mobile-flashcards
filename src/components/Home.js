import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Text, Card, CardItem, Grid, Col,Row, Spinner, View} from 'native-base';
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
        this.moveDecksToGridArray = this.moveDecksToGridArray.bind(this);
    }

    componentWillMount() {
        AsyncStorage.removeItem('decks');
        AsyncStorage.getItem('decks', (error, data) => {
            if (!data) {
                AsyncStorage.setItem('decks', JSON.stringify(InitialData));
            }
            this.props.fetchAllDecks();
        });
    }

    goToDetail(deckItem) {
        this.props.navigation.navigate('DetailDeck', { deckData: deckItem});
    }

    onCreateNew(deckitem) {
        this.props.navigation.navigate('DetailDeck', { deckData: deckItem.deck.deck });
    }
    moveDecksToGridArray(decks) {
        var totalColumn = 2;
        var index = 1;
        let gridArray = [[]];
        _.map(decks['Decks'], deckItem => {
            gridArray[gridArray.length-1].push(deckItem);
            if (index <= totalColumn) {
                index++;
            }
            if (index > totalColumn) {
                index = 1;
                gridArray.push([]);
            }
        })
        return gridArray;
    }
    renderContent() {
        const { decks } = this.props;
        const { gridStyle } = styles;
        if(!decks['Decks']) {
            return (
                <View>
                    <Spinner color={'blue'} />
                </View>
            )
        }
        const gridArray = this.moveDecksToGridArray(decks);
        return _.map(gridArray, (column,key) => {
            return (
                <Row key={key}>
                    {_.map(column, (deckItem,key) => {
                        return (
                            <Col key={key}>
                                <DeckSingle 
                                    itemTitle={deckItem.title} 
                                    itemIcon={deckItem.icon} 
                                    itemQuestionsCount={deckItem.questions.length !== null ? deckItem.questions.length : 0} 
                                    onItemClick={() => this.goToDetail(deckItem)}
                                />
                            </Col>
                        )
                    })}
                </Row>
            )
        })
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
                        <Button transparent onPress={() => navigate('NewDeck', { onCreateNewDeck: (deck) => this.onCreateNew({deck}) })}>
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
        backgroundColor: '#3F51B5',
        height: 54,
    },
    titleStyle : {
        color: 'white',
    },
    gridStyle : {
        width: '50%',
    }
}

function mapStateToProps({ decks }) {
    return { decks };
}

export default connect(mapStateToProps, { fetchAllDecks })(Home);