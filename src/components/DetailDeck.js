import React, { Component } from 'react';
import { Container, Header, Body, Button, Icon, Content, Text, Grid, Col, View, Spinner} from 'native-base';
import { title } from 'change-case';

import { connect } from 'react-redux';
import { fetchAllDecks } from '../actions';
import PageHeader from './Common/PageHeader';

class DetailDeck extends Component { 
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.fetchAllDecks();
    }
    renderContent() {
        const { deckData } = this.props.navigation.state.params;
        const { navigate } = this.props.navigation;
        const { decks } = this.props;
        const { contentStyle, deckTitleStyle, deckSubtitleStyle, buttonStyle } = styles;

        if(!decks['Decks']) {
            return (
                <View><Spinner color={'blue'}/></View>
            )
        }
        const deckItem = decks['Decks'][deckData.id];

        return (
            <Content contentContainerStyle={contentStyle}>
                <Icon name={deckItem.icon} style={{fontSize: 150}}/>
                <Text style={deckTitleStyle}>{deckItem.title}</Text>
                <Text style={[deckSubtitleStyle, {marginBottom: 48}]}>
                    {deckItem.questions.length !== null ? deckItem.questions.length : 0} Questions
                </Text>
                <Button full dark style={buttonStyle} onPress={() => navigate('QuizStack', { questions: deckItem.questions })}>
                    <Text>Start quiz</Text>
                </Button>
                <Button full bordered dark style={buttonStyle} onPress={() => navigate('AddNewQuestion', { deckID: deckData.id })}>
                    <Text>Add a new question</Text>
                </Button> 
            </Content>
        )
    }
    render() {
        const { goBack } = this.props.navigation;
        const { headerStyle, titleStyle} = styles;

        
        return(
            <Container>
                <PageHeader pageTitle={"Deck Detail"} goToPrevPage={() => goBack()}/>
                {this.renderContent()}
            </Container>
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

function mapStateToProps({ decks }) {
    return { decks };
}

export default connect(mapStateToProps, { fetchAllDecks })(DetailDeck);