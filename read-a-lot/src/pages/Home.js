import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Home() {
  const [subjectData, setSubjectData] = useState();
  const [coverId, setCoverId] = useState();
  async function fetchBooks(){
    const response = await fetch(`http://openlibrary.org/subjects/love.json`);
    const subData = await response.json();
    console.log(subData)
    setSubjectData(subData);

  }
  useEffect(() => {
    fetchBooks().then(r => r);
  }, []);
  return (
  <>
    <div className="title">
    
    <h1>HOME</h1>

    </div>

    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>


    <Container>
      <Row>
        <Col>
        <div className="card">
            <img className="card-img-top w-25" src="https://covers.openlibrary.org/b/id/12547191-L.jpg" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </Col>
        <Col>
        <div className="card">
            <img className="card-img-top w-25" src="https://covers.openlibrary.org/b/id/12547191-L.jpg" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </Col>
        <Col>
        <div className="card">
            <img className="card-img-top w-25" src="https://covers.openlibrary.org/b/id/12547191-L.jpg" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </Col>
      </Row>
    </Container>

</>
  );
}

export default Home;