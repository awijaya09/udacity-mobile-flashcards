import React, { Component } from 'react';
import { Container, Header, Content,Body, Left, Right, Icon, Title, Button, Form, Item, Label, Input, Text} from 'native-base';

import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import _ from 'lodash';

class AddNewDeck extends Component { 
    constructor(props) {
        super(props);
        this.submitNewDeck = this.submitNewDeck.bind(this);
        this.state = {
            title: '',
            iconName: '',
        };
    }

    submitNewDeck() {
        const { title, iconName } = this.state;
        if (title && iconName) {
            var deckId = _.random(0,999);
            var newData= { 
                    "title" : title,
                    "icon": iconName,
                    "id": deckId,
                    "questions" : []
            };
            var val = this.props.addNewDeck(newData);
            if (val) {
                this.props.navigation.goBack();
            }
        }
       
    }


    render() {
        const { navigate, goBack } = this.props.navigation;
        const { headerStyle, itemStyle, titleStyle, buttonStyle} = styles;
        return (
            <Container>
                <Header style={headerStyle} iosBarStyle='light-content'>
                    <Left />
                    <Body>
                        <Title style={titleStyle}>Add New Deck</Title>
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
                        <Label>Title</Label>
                        <Input value={this.state.title} onChangeText={(title) => this.setState({ title })}/>
                    </Item>
                    <Item floatingLabel style={itemStyle}>
                        <Label>Icon Name</Label>
                        <Input onChangeText={(iconName) => this.setState({ iconName })} value={this.state.iconName}/>
                    </Item>
                </Form>
                <Button block info style={buttonStyle} onPress={() => this.submitNewDeck()}>
                    <Text>Create New Deck</Text>
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

export default connect(null, { addNewDeck })(AddNewDeck);