import {Button} from 'react-bootstrap'





const Logout = ({logout}) => 
{
return(
    <Button
    variant="danger" 
    onClick={logout}
    
    >Logout</Button>
);

}


export default Logout;