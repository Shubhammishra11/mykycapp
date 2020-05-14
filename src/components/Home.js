import React from 'react'; 
import styled from 'styled-components'

class Home extends React.Component {
  componentDidMount ()
  {
    if(!sessionStorage.getItem("checkl"))
    {
      this.props.history.replace('/');
    }
  }
  state = {
    fullname: '',
    dob: '',
    gender:''
}
    onSubmit = (e) => {
      console.log(this.state);
        if((this.state.fullname==="")||(this.state.dob==="")||(this.state.gender===""))
		{ 
            alert("Please enter  details"); 
           //alert(this.genRef.current.value);
        } 
        else
        { 
            
            this.props.history.push('/display/');  
            sessionStorage.setItem("name",this.state.fullname);
            sessionStorage.setItem("birthday",this.state.dob);
            sessionStorage.setItem("gender",this.state.gender);

        }
    }
    onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  fun = (e) => {
    if (document.getElementById('r1').checked) {
      this.setState({ gender: document.getElementById('r1').value})
    }
    if (document.getElementById('r2').checked) {
      this.setState({ gender: document.getElementById('r2').value})
    }
    if (document.getElementById('r3').checked) {
      this.setState({ gender: document.getElementById('r3').value})
    }
  }
    render(){
        return (
                <Container>
                <LoginContainer>
                    <Header>Verification</Header>
                    <Sub>provide your details</Sub>
                    <div className="form-group">
                            <label>Full name:</label>
                            <input type = "text" 
                           className="form-control" value={this.state.fullname} name='fullname' onChange={this.onChange} 
				            placeholder = "Full Name"  pattern="[A-Za-z]" 
				        />
                        </div>
                        <div className="form-group">
                        <label for="birthday">Birthday:</label>
                        <input type="date" id="birthday" 
                        className="form-control" value={this.state.dob} name='dob' onChange={this.onChange} 
                        />
                        
                        </div>
                        <div className="form-group">
                        <label>Gender:</label><br></br>
                        <div class="form-check-inline">
  <label class="form-check-label">
  
    <input type="radio" class="form-check-input" id="r1" value="Male" name="gender"  onClick={this.fun}/>Male
  </label>
</div>
<div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" class="form-check-input" id="r2" value="Female" name="gender"  onClick={this.fun} />Female
  </label>
</div>
<div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" class="form-check-input" id="r3" value="other" name="gender"  onClick={this.fun}/>Other
  </label>
</div>
</div>
                    <Button onClick={this.onSubmit}>Submit</Button>
                </LoginContainer>
            </Container>);
                
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
export default Home;

