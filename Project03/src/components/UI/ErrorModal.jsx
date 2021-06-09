import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import card from './Card';

const Card = styled(card)`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;

    @media (min-width: 768px) {
        left: calc(50% - 20rem);
        width: 40rem;
    }
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`;

const Header = styled.header`
    background: #4f005f;
    padding: 1rem;

    & h2 {
        margin: 0;
        color: white;
    }
`;

const Content = styled.div`
    padding: 1rem;
`;

const Actions = styled.footer`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;

function ErrorModal({title, message, onConfirm}) {

    return(
        <>
            <Backdrop onClick={onConfirm}/>
            <Card>
                <Header>
                    <h2>
                        {title}
                    </h2>
                </Header>
                <Content>
                    <p>{message}</p>
                </Content>
                <Actions>
                    <Button onClick={onConfirm}>Okay</Button>
                </Actions>
            </Card>
        </>
    );
}

export default ErrorModal;