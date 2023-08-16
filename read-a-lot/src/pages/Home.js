import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
  <div className="title">

    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <h1>HOME</h1>

  </div>
  );
}

export default Home;