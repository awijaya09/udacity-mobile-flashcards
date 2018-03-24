import React, { Component } from 'react';
import { Container, Header, Content,Body, Left, Right, Icon, Title, Button, Form, Item, Label, Input, Text, Picker} from 'native-base';

import { connect } from 'react-redux';
import { addNewQuestion } from '../actions';
import _ from 'lodash';

class AddNewQuestion extends Component { 
    constructor(props) {
        super(props);
        this.submitNewQuesiton = this.submitNewQuesiton.bind(this);
        this.state = {
            question: '',
            fact: '',
            answer: false,

        }
    }

    submitNewQuesiton() {
        const { addNewQuestion } = this.props;
        const { question, answer, fact } = this.state;
        const { goBack } = this.props.navigation;
        const { deckID } = this.props.navigation.state.params;

        var values = {
            "question": question,
            "fact": fact,
            "answer": answer,
        }
        var insertNewQn = addNewQuestion(values,deckID );
        if(insertNewQn) {
            goBack();
        }

    }
    render() {
        const { headerStyle, titleStyle, itemStyle, buttonStyle } = styles;
        const { goBack } = this.props.navigation;
        const { question, answer, fact } = this.state;
        return (
            <Container>
                <Header style={headerStyle} iosBarStyle='light-content'>
                    <Left/>
                    <Body>
                        <Title style={titleStyle}>Add New Question</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='close' style={titleStyle}/>
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                <Form>
                    <Item floatingLabel style={itemStyle}>
                        <Label>Question</Label>
                        <Input value={question} onChangeText={(question) => this.setState({ question })}/>
                    </Item>
                    <Item floatingLabel style={itemStyle}>
                        <Label>Fact</Label>
                        <Input value={fact} onChangeText={(fact) => this.setState({ fact })}/>
                    </Item>
                    <Picker
                        mode="dropdown"
                        placeholder="Select Answer"
                        selectedValue={answer}
                        onValueChange={(answer) => this.setState({ answer})}
                    >
                        <Item label="True" value="true" />
                        <Item label="False" value="false" />
                    </Picker>
                </Form>
                <Button block info style={buttonStyle} onPress={() => this.submitNewQuesiton()}>
                    <Text>Submit</Text>
                </Button>
                </Content>
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
    itemStyle : {
        marginRight: 16,
    },
    buttonStyle : {
        marginTop: 16, 
        marginRight: 16, 
        marginLeft: 16,
        backgroundColor: '#5C6BC0',
    }
}

export default connect(null, { addNewQuestion })(AddNewQuestion);