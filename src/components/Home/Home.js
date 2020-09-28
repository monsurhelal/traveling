import React, { useState } from 'react';
import './home.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Logo.png';
import img1 from '../../Image/Sajek.png';
import img2 from '../../Image/Sreemongol.png';
import img3 from '../../Image/sundorbon.png';
import Place from '../Places/Place';

const Home = () => {

const data = [

{name:'sajek' , description:'Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of Kasalong range of mountains in Sajek union.' ,img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/800px-Sajek_Valley_2.jpg'},
{name:'sreemongol' , description:'It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.' ,img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Sreemangal_tea_garden_2017-08-20.jpg/250px-Sreemangal_tea_garden_2017-08-20.jpg'},
{name:'sundorban' , description:"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal." ,img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Beauty_of_Sundarban_river02.jpg/284px-Beauty_of_Sundarban_river02.jpg'}


]

const [place,setPlace] = useState(data);


    return (
        <div className="bg-image">
            <Navbar variant="dark">
    <Navbar.Brand href="#home"> <img src={logo} alt=""/> </Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search Your Destinetion" className="mr-sm-2" />
    </Form>
    <Nav className="mr-auto">
      <Nav.Link href="/home">home</Nav.Link>
      <Nav.Link href="/Destinetion">Destinetion</Nav.Link>
      <Nav.Link href="/Blog">Blog</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
    <Nav.Link className="login" href="/login" >Login</Nav.Link>
  </Navbar>


  {place.map(pc => <Place place={pc}></Place> )}
  
        </div>
    );
};

export default Home;