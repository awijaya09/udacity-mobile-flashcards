import React, { Component } from 'react';
import { Col, Card, CardItem, Body, Icon, Text } from 'native-base';

class DeckSingle extends Component { 
    render() {
        const { deckIconStyle, deckBodyStyle, deckTitleStyle, deckSubtitleStyle } = styles ;
        const { onItemClick, itemTitle, itemQuestionsCount, itemIcon} = this.props;
        return(
            <Col style={{ paddingLeft: 2, paddingRight: 2 }}>
                <Card>
                    <CardItem button onPress={onItemClick}>
                        <Body style={deckBodyStyle}>
                            <Icon name={itemIcon} style={deckIconStyle}/>
                            <Text style={deckTitleStyle}>{ itemTitle }</Text>
                            <Text style={deckSubtitleStyle}>{itemQuestionsCount} Questions</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Col>
        )
    }
}

const styles = {
    deckIconStyle: {
        alignSelf: 'center',
        fontSize: 50,
    },
    deckBodyStyle: {
        paddingTop: 20,
        paddingBottom : 20,
        alignItems: 'center'
    },
    deckTitleStyle : {
        fontWeight: 'bold',
    },
    deckSubtitleStyle : {
        fontSize: 12,
        color: 'grey',
        fontWeight: '100'
    },
}

export default DeckSingle;