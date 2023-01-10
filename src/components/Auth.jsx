import styled from 'styled-components';
import AuthContext from '../context/AuthContext';
import './Auth.scss';
import Login from './Login';
import Logout from './Logout';
import Welcome from './Welcome';


const StyledWelcome = styled(Welcome)`
   color: #666;

`



const Auth = () => {

    return (
        <>
      <AuthContext.Consumer>
         {
             (value) => {
                 const {isAuth, name, login, logout} = value;

                 return (
                     <>
                     <Welcome name={name}/>

                     {
                         !isAuth && <Login login={login} />
                     }
                     {
                         isAuth && <Logout logout={logout} />
                     }
                     </>
                 )
             }
         }
      </AuthContext.Consumer>

      <div>
          Ovo je element koji ne konzumira podatke iz konteksta
      </div>


        </>
    )

}

export default Auth;