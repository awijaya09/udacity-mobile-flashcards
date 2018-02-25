import React, { Component } from 'react';
import { Container, Header, Content,Body, Left, Right, Icon, Title, Button} from 'native-base';

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
                <Content>

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