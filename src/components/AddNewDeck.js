import React, { Component } from 'react';
import { Container, Header, Content,Body, Left, Right, Icon, Title, Button, Form, Item, Label, Input, Text} from 'native-base';

class AddNewDeck extends Component { 
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
                        <Input />
                    </Item>
                    <Item floatingLabel style={itemStyle}>
                        <Label>Icon Name</Label>
                        <Input />
                    </Item>
                </Form>
                <Button block info style={buttonStyle}>
                    <Text>Create New Deck</Text>
                </Button>
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
    itemStyle : {
        marginRight: 16,
    },
    buttonStyle : {
        marginTop: 16, 
        marginRight: 16, 
        marginLeft: 16
    }
}

export default AddNewDeck;