import React from 'react'; 
import styled from 'styled-components';
import Logo from './pic.png';
class Display extends React.Component {
    componentDidMount ()
  {
    if(!sessionStorage.getItem("checkl"))
    {
      this.props.history.replace('/');
    }
  }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/selfie/'); 
        
    }
    render(){
        return ( <Container>
            <LoginContainer>
                <Header>Verify Your Identity</Header>
                <Sub>Take a selfie</Sub>
                <img src={Logo} alt="Selfie" width="350" height="345"></img>
                <Button onClick={this.onSubmit}>Click Selfie</Button>
            </LoginContainer>
        </Container>);
    }
};     
const Container = styled.div`
    display: flex;
    padding: 1rem 1rem;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const Header = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 20px;
    @media(max-width: 576px) {
        font-size: 16px;
    };
`

const Sub = styled.div`
    margin-top: 5px;
    font-size: 16px;
    color: gray;
    text-transform: capitalize;
    margin-bottom: 2rem;
    @media(max-width: 576px) {
        font-size: 12px;
    };
`

const Input = styled.input`
    padding: 10px 10px;
    margin: 0.5rem 1rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    max-width: 280px;
    font-size: 16px;
    width: 100%;
    &:focus{
        border: 2px solid purple;
        outline: purple;
    }
    @media(max-width: 576px) {
        font-size: 14px;
    };
`;

const Button = styled.button`
    padding: 10px 30px;
    font-size: 16px;
    background-color: purple;
    outline: none;
    border: none;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    letter-spacing: 2px;
    margin-top: 1rem;
    max-width: 200px;
    width: 100%;
    &:hover{
        opacity: 0.7;
    }
    &:focus{
        box-shadow: none;
    }
    &:active{
        opacity: 0.7;
        box-shadow: 0 1px 0 purple;
    }
`

export default Display;
