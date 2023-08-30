import React, {useContext, useState} from "react";
import { FavoritesContext } from "../FavoritesProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useEffect} from "react";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  let [fav, setFav] = useState([])
    async function fetchBooks() {
        const favorites = JSON.parse(localStorage.getItem("favoriteBooks"))

        for(let i = 0; i < favorites.length; ++i ){

            const response = await fetch(`https://openlibrary.org/search.json?title=${favorites[i]}`);
            const subData = await response.json();
            setFav( ()=>[...fav, subData.docs[0]])
            // setFav([...fav, subData.docs[0]]);
            fav.push(subData.docs[0])

        }
        console.log(fav)

    }
    useEffect(() => {
        fetchBooks();
    }, []);




  return (
    <Container>
        <div className="title">
      <h1>My Favorites</h1>
      </div>
      <Row>
        {fav.map((book, index) => (
          <Col key={index}>
            <div className="card">
              <div className="card-body">
                  <img
                      className="card-img-top w-100 h-auto"
                      src={`https://covers.openlibrary.org/b/id/${book.cover_id || book.cover_i}-L.jpg` }
                      alt="Card cover"
                  />
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author_name}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Favorites;
