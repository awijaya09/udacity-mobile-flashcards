import React, { Component } from 'react';
import PageHeader from './Common/PageHeader';
import QuizTemplate from './QuizTemplate';
import { Container, Content } from 'native-base';

export default class QuizStack extends Component {
    render() {
        const { goBack } = this.props.navigation;
        const { questions } = this.props.navigation.state.params;
        return(
            <Container>
                <PageHeader pageTitle={'Quiz'} goToPrevPage={() => goBack() }/>
                <Content padder>
                    <QuizTemplate questions={questions}/>
                </Content>
            </Container>
        )
    }
}