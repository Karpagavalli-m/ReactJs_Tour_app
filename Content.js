import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Content = () => {

    
  return (
    <Container className='mt-5'>
       <Row xs={1} lg={4} className="g-4">
       <Col>
          <Card>
            <Card.Img variant="top" src={require("./Santorini.jpeg")} 
            width="100"
            height="300"/>
            <Card.Body>
              <Card.Title id='Cardtitle' >Santorini</Card.Title>
              <Card.Text>
              Explore Santorini Tourist Places
              </Card.Text>
              <Navbar variant="light" bg="light"  expand='xxxxl' >
            <Container fluid> 
            <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Info"
              menuVariant="light"
              className="h5"
            >
              <NavDropdown.Item  className="text-wrap ms-1 mx-5 my-1 p-3"
              href="#action/1">Santorini, with its iconic white-washed buildings and stunning sunsets over the caldera, offers a picturesque escape for travelers. Visitors can explore ancient ruins, relax on unique volcanic beaches, and indulge in delicious Greek cuisine.
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>   
      </Container>
    </Navbar>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={require("./China.jpeg")} 
            width="100"
            height="300"/>
            <Card.Body>
              <Card.Title id='Cardtitle' >China</Card.Title>
              <Card.Text>
              Explore China Tourist Places
              </Card.Text>
              <Navbar variant="light" bg="light"  expand='xxxxl' >
            <Container fluid> 
            <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Info"
              menuVariant="light"
              className="h5"
            >
              <NavDropdown.Item  className="text-wrap ms-1 mx-5 my-1 p-3"
              href="#action/1">China offers a rich tapestry of experiences, from the ancient wonders of the Great Wall and the Terracotta Army to the modern marvels of Shanghai and Beijing.Visitors can immerse themselves in diverse landscapes, vibrant cultures, and a history that spans millennia.
               
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>   
      </Container>
    </Navbar>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={require("./Paris.jpeg")} 
            width="100"
            height="300"/>
            <Card.Body>
              <Card.Title id='Cardtitle' >Paris</Card.Title>
              <Card.Text>
                Explore Paris Tourist Places
              </Card.Text>
              <Navbar variant="light" bg="light"  expand='xxxxl' >
            <Container fluid> 
            <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Info"
              menuVariant="light"
              className="h5"
            >
              <NavDropdown.Item  className="text-wrap ms-1 mx-5 my-1 p-3"
              href="#action/1">Paris, the City of Light, enchants visitors with its iconic landmarks like the Eiffel Tower and Notre-Dame Cathedral. Stroll along the Seine, explore world-class museums, and savor exquisite French cuisine in charming cafes.
               
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>   
      </Container>
    </Navbar>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={require("./Korea4.jpg")} 
            width="100"
            height="300"/>
            <Card.Body>
              <Card.Title id='Cardtitle' >Korea</Card.Title>
              <Card.Text>
              Explore Korea Tourist Places
              </Card.Text>
              <Navbar variant="light" bg="light"  expand='xxxxl' >
            <Container fluid> 
            <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Info"
              menuVariant="light"
              className="h5"
            >
              <NavDropdown.Item  className="text-wrap ms-1 mx-5 my-1 p-3"
              href="#action/1">Korea offers a captivating blend of ancient traditions and modern attractions, from the historic palaces of Seoul to the bustling markets and vibrant nightlife. Visitors can explore stunning natural landscapes, indulge in delicious Korean cuisine, and experience the unique culture and hospitality of the Korean people.
               
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>   
      </Container>
    </Navbar>
            </Card.Body>
          </Card>
        </Col>
    </Row> 
    </Container>
  )
}

export default Content
