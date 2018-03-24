import React, { Component } from 'react';
import { Container, Content, Text, View, Button } from 'native-base';

export default class QuizTemplate extends Component { 
    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.goToNextQuestion = this.goToNextQuestion.bind(this);
        this.state = {
            score: 0,
            activeQn: null,
            showFact: false,
            totalQuestions: 0,
            curIndex: 1,
        }
    }

    componentWillMount() {
        const { questions } = this.props;
        this.setState({
            activeQn: questions[0],
            totalQuestions: questions.length,
        })
    }
    checkAnswer(userInput) {
        const { activeQn, score, curIndex } = this.state;
        const { questions } = this.props;
        if (userInput === activeQn.answer){
            this.setState({
                showFact: true,
                score: score+1,
            })
        } else {
            this.setState({
                showFact:true,
            })
        }

    }
    goToNextQuestion() {
        const { activeQn, score, curIndex } = this.state;
        const { questions } = this.props;
        var index = questions.indexOf(activeQn);
        if(index < questions.length-1){
            questions.splice(index, 1);
            this.setState({
                showFact: false,
                activeQn: questions[0],
                curIndex: curIndex+1
            })
        }
    }

    render() {
        //const { questions } = this.props;
        const { mainContentStyle, deckTitleStyle, buttonStyle, factStyle, answerLabelStyle } = styles;
        const { questions } = this.props;
        const { activeQn, totalQuestions, curIndex } = this.state;
        if(activeQn) {
            return (
                <Container>
                    <Content contentContainerStyle={mainContentStyle}>
                        <Text>{curIndex} / {totalQuestions} Question(s)</Text>
                        <Text style={ deckTitleStyle }>{activeQn.question}</Text>
                        { this.state.showFact && 
                            <View>
                                <Text style={answerLabelStyle}>Answer:</Text>
                                <Text style={factStyle}>{activeQn.fact}</Text>
                                <Button block dark style={[buttonStyle, {marginTop: 60,}]} onPress={()=> this.goToNextQuestion()}>
                                    <Text>Next Question </Text>
                                </Button>
                            </View>
                        }
                        { !this.state.showFact && 
                            <View block>
                                <Button block dark style={[buttonStyle, {marginTop: 60,}]} onPress={()=> this.checkAnswer(true)}>
                                    <Text>Correct</Text>
                                </Button>
                                <Button block bordered dark style={buttonStyle} onPress={()=> this.checkAnswer(false)}>
                                    <Text>Incorrect</Text>
                                </Button>
                            </View>
                        }
                    </Content>
                </Container>
            )
        }
    }
}

const styles = {
    mainContentStyle: {
        alignItems: 'center',
        marginTop: 32,
        marginLeft: 24,
        marginRight: 24,
        flex: 1,
    },
    deckTitleStyle : {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    buttonStyle: { 
        marginTop: 8,
    }, 
    factStyle: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 20,
        color: '#3F51B5',
        textAlign: 'center',
    },
    answerLabelStyle: {
        marginTop: 24,
        fontSize: 20,
        textAlign: 'center',
        color: '#3F51B5',
    }
}