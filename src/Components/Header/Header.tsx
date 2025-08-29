import { Link } from 'react-router-dom';
import { useState } from 'react'


function Header(){
        //const navigate = useNavigate();
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        

     function logout(){
        
        setIsLoggedIn(false)
     }
     console.log("user is ",isLoggedIn)
    return (
        <>
            <nav>
                <Link to ="/">Home </Link>
                <Link to ="/resume">Resume </Link>
                <Link to ="/feature">Feature </Link>
                <Link to ="/ecom">Ecom </Link>
                <Link to ="/login">Login </Link>
            </nav>
            
             {
                 isLoggedIn?
                 (
                    <span>
                        <span>
                            Welcome Maulin
                        </span>

                        <span onClick={ () => logout()}>
                            logout


                        </span>
                    </span>
                 )
                 :
                 (<span>
                 
                <span>
                   
                </span>
                &nbsp; &nbsp;
                
                {/* <span style={{ float: 'none', marginRight: '0em', cursor: 'pointer' }}onClick={ login}>
                    login
                    </span> */}
                    

                
            </span>)

                 }
            <br></br>
            
    
        </>
    );



}

export default Header