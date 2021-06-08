import React from 'react';
import styled from 'styled-components';
import card from '../UI/Card';

const Card = styled(card)`
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;

    & ul {
        list-style: none;
        padding: 1rem;
    }

    & li {
        border: 1px solid #ccc;
        margin: 0.5rem 0;
        padding: 0.5rem;
    }
`;

function UsersList({users}) {
    return (
        <Card>
            <ul>
                {users.map(u => (
                    <li key={u.id}>
                        {u.name} ({u.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UsersList;