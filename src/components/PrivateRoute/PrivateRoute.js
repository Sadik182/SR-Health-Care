import React from 'react';


const PrivateRoute = ({children}) => {
    const [user] = useAuthState(auth)
};

export default PrivateRoute;