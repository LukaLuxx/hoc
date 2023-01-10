import styled from "styled-components";


const H1 = styled.h1`
  font-size:28px;
  font-weight:bold;
  color:darkblue;
  text-decoration:line-through red;
`;



const Welcome = ({name,children, className}) => {
       return (
        <div className={className}>
         <H1>
         Welcome {name}
         </H1>

         <span>{children}</span>
        
        
        </div>
       );
}

export default Welcome;