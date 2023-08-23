import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Home() {
    const [subjectData, setSubjectData] = useState([]);
    const [randomBooks, setRandomBooks] = useState([]);
    
    async function fetchBooks() {
      const response = await fetch(`http://openlibrary.org/subjects/love.json`);
      const subData = await response.json();
      setSubjectData(subData.works || []);
    }
  
    useEffect(() => {
      fetchBooks();
    }, []);
  
    useEffect(() => {
      if (subjectData.length > 0) {
        const randomIndices = [];
        while (randomIndices.length < 3) {
          const randomIndex = Math.floor(Math.random() * subjectData.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
        const selectedBooks = randomIndices.map(index => subjectData[index]);
        setRandomBooks(selectedBooks);
      }
    }, [subjectData]);
  

  return (
  <>
    <div className="title">
    
    <h1>HOME</h1>
      </div>

      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
      </DropdownButton>

      <Container>
        <Row>
          {randomBooks.map((book, index) => (
            <Col key={index}>
              <div className="card">
                <img
                  className="card-img-top w-100 h-auto"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                  alt="Card cover"
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    {book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown Author'}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Add to My Library
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;