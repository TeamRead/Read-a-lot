import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState, useContext} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FavoritesContext } from '../FavoritesProvider';
import {Button} from "react-bootstrap";

function Home() {
    const [subjectData, setSubjectData] = useState([]);
    const [randomBooks, setRandomBooks] = useState([]);
    const { addFavorite } = useContext(FavoritesContext);
    const [refreshSameBooks, setrEfreshSameBooks] = useState([]);
    const [newRandomBooks, setNewRandomBooks] = useState([]);
    
    async function fetchBooks() {
      const response = await fetch(`https://openlibrary.org/subjects/love.json`);
      const subData = await response.json();
        console.log(subData.works)
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

    function addToFavoritesRefresh(bookName){
        for(let i =0; i < randomBooks.length; ++i){
            if(bookName !== randomBooks[i].title){
                refreshSameBooks.push(randomBooks[i].title)
            }
        }
        // async function fetchBooks() {
        //     const response = await fetch(`https://openlibrary.org/subjects/love.json`);
        //     const subData = await response.json();
        //     setSubjectData(subData.works || []);
        // }
        // fetchBooks().then(r => r);

        const randomIndices = [];
        while (randomIndices.length < 1) {
            const randomIndex = Math.floor(Math.random() * subjectData.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }
        const selectedBooks = randomIndices.map(index => subjectData[index]);
        refreshSameBooks.push(selectedBooks[0].title);


        async function fetchRefreshBooks() {
            setRandomBooks([])
            for(let i = 0; i < refreshSameBooks.length; ++i ){
                randomBooks.pop()
                const response = await fetch(`https://openlibrary.org/search.json?title=${refreshSameBooks[i]}`);
                const subData = await response.json();
                newRandomBooks.push(subData.docs[0])

            }
            setRandomBooks(newRandomBooks)
            console.log(randomBooks)
        }
        fetchRefreshBooks().then(r => r);
        setRandomBooks([])
        console.log(randomBooks)

    }
  

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
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id || book.cover_i}-L.jpg` }
                  alt="Card cover"
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    {book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown Author'}
                  </p>
                  <Button onClick={()=> addToFavoritesRefresh(book.title)}>
                    Add to My Library
                  </Button>
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