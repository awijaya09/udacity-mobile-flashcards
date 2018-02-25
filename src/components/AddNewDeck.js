import React, { Component } from 'react';
import { Container, Header, Content,Body, Left, Right, Icon, Title, Button, Form, Item, Label, Input, Text} from 'native-base';

class AddNewDeck extends Component { 
    render() {
        const { navigate, goBack } = this.props.navigation;
        const { headerStyle, itemStyle } = styles;
        return (
            <Container>
                <Header style={headerStyle} iosBarStyle='light-content'>
                    <Left />
                    <Body>
                        <Title style={itemStyle}>Add New Deck</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='close' style={itemStyle}/>
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                <Form>
                    <Item floatingLabel>
                        <Label>Title</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Icon Name</Label>
                        <Input />
                    </Item>
                </Form>
                <Button block info style={{ marginTop: 16, marginRight: 16, marginLeft: 16}}>
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
    itemStyle : {
        color: 'white',
    },
}

export default AddNewDeck;