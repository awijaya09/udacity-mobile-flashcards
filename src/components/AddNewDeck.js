import React, { Component } from 'react';
import { Container, Header, Content,Body, Left, Right, Icon, Title, Button, Form, Item, Label, Input, Text, Picker} from 'native-base';

import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import PageHeaderModal from './Common/PageHeaderModal';
import { headerStyle, titleStyle, formItemStyle, formButtonStyle } from '../components/Common/CommonStyle';
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
        var deckId = _.random(0,999);
        if (title && iconName) {
            var newData= { 
                    "title" : title,
                    "icon": iconName,
                    "id": deckId,
                    "questions" : []
            };
           this.props.addNewDeck(newData, payload => {
                this.props.navigation.goBack();
                this.props.navigation.state.params.onCreateNewDeck({ deck: payload['Decks'][deckId] });
                return payload;
            });
        }
       
    }


    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <Container>
                <PageHeaderModal pageTitle={'Add a Deck'} goToPrevPage={() => goBack()}/>
                <Content padder>
                    <Form>
                        <Item floatingLabel style={formItemStyle}>
                            <Label>Title</Label>
                            <Input value={this.state.title} onChangeText={(title) => this.setState({ title })}/>
                        </Item>
                        <Picker
                            mode="dropdown"
                            placeholder="Select Icon"
                            selectedValue={this.state.iconName}
                            onValueChange={(iconName) => this.setState({ iconName})}
                            style={{marginLeft: 8}}
                        >
                            <Item label="Key" value="md-key" />
                            <Item label="Switch" value="md-switch" />
                            <Item label="Football" value="md-football" />
                            <Item label="Funnel" value="md-funnel" />
                            <Item label="Man" value="md-man" />
                        </Picker>
                    </Form>
                    <Button block info style={formButtonStyle} onPress={() => this.submitNewDeck()}>
                        <Text>Create New Deck</Text>
                    </Button>
                </Content>
        </Container>
        )
       
    }
}
export default connect(null, { addNewDeck })(AddNewDeck);