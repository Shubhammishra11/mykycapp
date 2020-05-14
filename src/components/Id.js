import React from "react";
import styled from 'styled-components'
import './d.css';
import Webcam from "react-webcam";
const axios = require('axios');
class Id extends React.Component {
    componentDidMount ()
  {
    if(sessionStorage.getItem("checkl")===null)
    {
      this.props.history.replace('/');
    }
    if(sessionStorage.getItem("img1")!==null)
   {
    const imageSrc =sessionStorage.getItem("img1");
    if(imageSrc!=="1")
    {
    this.setState({imgpreview: imageSrc, webcamopen: false});
    this.setState({chose2: true,k:1});}

   }
   if(sessionStorage.getItem("img2")!==null)
   {
    const imageSrc =sessionStorage.getItem("img2");
    if(imageSrc!=="1"){
    this.setState({imgpreview2: imageSrc, webcamopen: false});
    this.setState({k:2});}
   }
   if(sessionStorage.getItem("checked"))
   {
    document.getElementById(sessionStorage.getItem("checked")).checked = true;
   }

  }
  constructor()
  {
      super();
    this.state = {
        chose: false,
        chose2: false,
        webcamopen: false,
        imgpreview: '',
        imgpreview2: '',
        k:0,
        m:0,
        card:'',
        selfie: sessionStorage.getItem("img"),
        name: sessionStorage.getItem("name"),
        dob: sessionStorage.getItem("birthday"),
        gender: sessionStorage.getItem("gender")
        
    }
}
    call = () => {
        
        this.setState({chose: true, imgpreview: '',imgpreview2: '',k:0,chose2: false})
        sessionStorage.setItem("img1","1");
        sessionStorage.setItem("img2","1");
        if (document.getElementById('r1').checked) {
            this.setState({ card: document.getElementById('r1').value});
            sessionStorage.setItem("checked","r1");
          }
          if (document.getElementById('r2').checked) {
            this.setState({ card: document.getElementById('r2').value});
            sessionStorage.setItem("checked","r2");
          }
          if (document.getElementById('r3').checked) {
            this.setState({ card: document.getElementById('r3').value});
            sessionStorage.setItem("checked","r3");
          }
    };
    setRef = webcam => {
        this.webcam = webcam;
    };
    start = () => {
        
        this.setState({webcamopen: true,chose: false,chose2: false})
    };
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        if(this.state.imgpreview.length > 0 && this.state.k>0)
        this.setState({imgpreview2: imageSrc, webcamopen: false})
        else
        this.setState({imgpreview: imageSrc, webcamopen: false})
    };

    openWebcam = () => {
        this.setState(prev => ({webcamopen: !prev.webcamopen}))
        if(this.state.k===0)
        this.setState({imgpreview: ''});
        else
        this.setState({imgpreview2: ''});
    }
    save = () => {
        if(this.state.chose2===false && this.state.k===0){
        this.setState({chose2: true,k:1});
        const imageSrc =this.state.imgpreview;
        sessionStorage.setItem("img1",imageSrc);
    }
        else{
        this.setState({k:2});
        const imageSrc =this.state.imgpreview2;
        sessionStorage.setItem("img2",imageSrc);

        }
        
    }
    complete = () =>{
        this.setState({m:1});
         
        axios.post('http://localhost:3000/users', {
            name: sessionStorage.getItem("name"),
        dob: sessionStorage.getItem("birthday"),
        gender: sessionStorage.getItem("gender")
    
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});   
    }
    
    handleOnUserMedia = () => {
        const webcamRef = React.useRef(null);
        webcamRef.current.stream.addEventListener("inactive", (target) => {
          console.log("Webcam was stopped");
          console.log({ target });
        });
      };
      logout = () =>{
        this.props.history.replace('/');
        sessionStorage.clear();
      }
    

    render(){
        const videoConstraints = {
           
            facingMode: { exact: "user" }
        };
        
        return(
            <>
            <Container>
                <LoginContainer>
             {this.state.m===0
             ?
                <div>
            <Header>Government ID:</Header><br/><br/> 
                                    <div class="form-check-inline">
            <label class="form-check-label">
            
                <input type="radio" class="form-check-input" name="optradio" id="r1" button onClick={this.call} value="Aadhar"  />Aadhar
            </label>
            </div>
            <div class="form-check-inline">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" name="optradio"  id="r2" button onClick={this.call} value="PAN" />PAN
            </label>
            </div>
            <div class="form-check-inline">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" name="optradio"  id="r3" button onClick={this.call} value="DL"/>DL
            </label>
            </div><br/><br/>
            
            
        
            
    
            { this.state.chose
            ?
            <div>
               <br/><h2>Front Page pic</h2><br/> 
               <Button onClick={this.start}>Click photo</Button>
            </div>
            :
            null
            }
            { this.state.chose2 && this.state.imgpreview2.length ===0
            ?
            <div>
               <br/><h2>Back Page pic</h2><br/> 
               
               <Button onClick={this.start}>Click photo</Button>
            </div>
            :
            null
            }
            {this.state.webcamopen
            ? 
            <div ><Sub>Fit your id inside the box and Name and dob clearly visible</Sub>
            
                <Webcam
                audio={false}
                
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                class="rcc"
                
                videoConstraints={videoConstraints} />
                <Button onClick={this.capture}>Capture photo</Button>
                <div class="element">
                 
        </div>
            </div>
            :
            null
            }<br></br>
            {this.state.imgpreview.length > 0 && this.state.imgpreview2.length ===0 &&this.state.k===0
            ?   <div>
                    <img src={this.state.imgpreview} alt="" />
                    <br></br>
                    <Button onClick={this.openWebcam}>Retake</Button>
                    <Button onClick={this.save}>Looks Good</Button>
                </div>
            : null
            }
            {this.state.imgpreview2.length > 0 && this.state.k===1
             ?   <div>
             <img src={this.state.imgpreview2} alt="" />
             <br></br>
             <Button onClick={this.openWebcam}>Retake</Button>
             <Button onClick={this.save}>Looks Good</Button>
         </div>
            : null

            }
            {this.state.k>1
            ?
            <div>
                 <br/><h2>Front Page pic</h2><br/> 
             <img src={this.state.imgpreview} alt="" />
             <br></br>
             <br/><h2>Back Page pic</h2><br/> 
             <img src={this.state.imgpreview2} alt="" />
             <br></br>
             <Button onClick={this.complete}>Save and continue</Button>
             </div>
            : null
            }
            </div>
            :
            null
             }
            { this.state.m===1
            ?
            <div>
                <Header>Completed Successfully</Header> 
                <br/>Your Details<br/>
            <Sub>Full Name : {this.state.name}</Sub>
            <Sub>Birthday : {this.state.dob}</Sub>
            <Sub>Gender : {this.state.gender}</Sub>
            <Sub>Selfie photo :</Sub>
            <img src={this.state.selfie} alt="" />
            <Sub>Government id : {this.state.card}</Sub>
            <Sub>Front page Photo :</Sub>
            <img src={this.state.imgpreview} alt="" />
            <Sub>Back Page Photo :</Sub>
            <img src={this.state.imgpreview2} alt="" />
                <Button onClick={this.logout}>Logout</Button>
            </div>
            :
            null
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
export default Id;