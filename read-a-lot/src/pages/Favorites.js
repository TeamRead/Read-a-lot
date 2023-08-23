import React, { useContext } from "react";
import { FavoritesContext } from "../FavoritesProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
        <div className="title">
      <h1>My Favorites</h1>
      </div>
      <Row>
        {favorites.map((book, index) => (
          <Col key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Favorites;
