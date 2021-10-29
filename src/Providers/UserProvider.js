import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [user, setUser] = useState(false);

    // Aici se poate trage prin API tot userul
    useEffect(() => {
        setUser(
            {
                name: "John Smith",
                notifications: 24
            }
        )
    },[]);

    return (
        <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>
    );
}

export default UserProvider;