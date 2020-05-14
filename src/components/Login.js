import React from 'react'
import styled from 'styled-components'
import useDarkMode from "use-dark-mode";

class Login extends React.Component{
    
    state = {
        user_name: '',
        password: '',
    }
    
    onSubmit = () => {
        console.log(this.state)
        if((this.state.user_name==="") || (this.state.password===""))
		{ 
            alert("Please enter  details"); 
        } 
        else if((this.state.user_name==="admin") && (this.state.password==="pass"))
		{ 
            sessionStorage.setItem("checkl","true");
            this.props.history.push('/home/');  
        }
        else
        { 
            alert("Please enter correct details"); 
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    render(){
       
        return(
            <Container>
                <LoginContainer>
                    <Header>Hi! Welcome to KYC</Header>
                    <Sub>One Stop KYC Solution</Sub>
                    <Input placeholder='Enter your username' type='text' value={this.state.user_name} name='user_name' onChange={this.onChange} />
                    <Input placeholder='Enter your password' type='password' value={this.state.password} name='password' onChange={this.onChange} />
                    <Button onClick={this.onSubmit}>Submit</Button>
                </LoginContainer>
            </Container>
        )
    }
}

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

export default Login;
