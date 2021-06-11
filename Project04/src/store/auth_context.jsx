import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export function AuthContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
        if (storedUserLoggedIn === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    function onLogin(email, password) {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }

    function onLogout() {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, onLogout, onLogin}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;