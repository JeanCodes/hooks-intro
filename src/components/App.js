import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UsersList from './UsersList';

const App = () => {

    const [resource, setResource] = useState('posts');
    const [user, setUser] = useState('users');

    return(
        <div>
            <div>
                <div>
                    <button onClick={() => setResource('posts')}>Posts</button>
                    <button onClick={() => setResource('todos')}>Todos</button>
                    <button onClick={() => setUser('users')}>Users</button>
                </div>
            </div>
            <ResourceList resource={ resource } />
            <UsersList user={ user } />
        </div>
    );
}

export default App;