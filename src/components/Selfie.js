import React from "react";
import Webcam from "react-webcam";
import styled from 'styled-components';
import './c.css';
class Selfie extends React.Component {
   
    componentDidMount ()
  {
    if(!sessionStorage.getItem("checkl"))
    {
      this.props.history.replace('/');
    }
   if(sessionStorage.getItem("img")!==null)
   {
    const imageSrc =sessionStorage.getItem("img");
    this.setState({imgpreview: imageSrc});
   }
   else
   {
    this.setState({webcamopen: true});
   }
    

  }
constructor() {
    super();
  this.state = {
    webcamopen: false,
    imgpreview: '',
    }
}
    


    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({imgpreview: imageSrc, webcamopen: false});
        
    };

    openWebcam = () => {
        this.setState(prev => ({webcamopen: !prev.webcamopen}))
    }
    save = () => {
        this.props.history.push('/id/');
        const imageSrc =this.state.imgpreview;
        sessionStorage.setItem("img",imageSrc);
    }

    render() {
        const videoConstraints = {
            facingMode: "user"
        };
       
        return (
            
            <>
            <Container>
                <LoginContainer>
                   
            {this.state.webcamopen
            ? 
            <div> <Header>Looks in circular region</Header>
                <Webcam
                audio={false}
                
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                
                class="rc"
                videoConstraints={videoConstraints} />
                <Button onClick={this.capture}>Capture photo</Button>
            </div>
            :
            null
            }<br></br>
            {this.state.imgpreview.length > 0 && !this.state.webcamopen
            ?   <div>
                    <br/><h2>Yours Selfie pic</h2><br/> 
                    <img src={this.state.imgpreview} alt="" />
                    <br></br>
                    <Button onClick={this.openWebcam}>Retake</Button>
                    <Button onClick={this.save}>Looks Good</Button>
                </div>
            : null
            }
             </LoginContainer>
            </Container>
            </>
        );
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
  
export default Selfie;