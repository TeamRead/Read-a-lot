import Nav from 'react-bootstrap/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Read-A-Lot</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Favorites</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Home;