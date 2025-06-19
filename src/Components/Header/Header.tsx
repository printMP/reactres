import { Link } from 'react-router-dom'
import "./Header.css"
import { useState } from 'react'
//import logo pic

function Header() {
    const [isLoggedIn, setLogIn] = useState(false)
    const name = "Maulin"
    return (
        <>
            <div className="Header">
                This is a Header
                <nav>
                    <Link to="/">Home</Link><br />
                    <Link to="/ecom">Ecom</Link><br />
                    <Link to="/feature">Feature</Link><br />
                    <Link to="/resume">Resume</Link>
                </nav>
                {isLoggedIn ? 
                    <div className="logOut">
                        <span>Welcome {name}</span>
                        &nbsp;
                        <span onClick={() => setLogIn(false)}>Log Out</span>
                    </div>
                    :

                    <div className="logIn">
                        {/* Login will be automatically 'logged in' */}
                        <span>Register</span>
                        &nbsp;
                        <span onClick={() => setLogIn(true)}>Log In</span>
                    </div>
                }

            </div>

        </>
    )

}
export default Header