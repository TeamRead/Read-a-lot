import Nav from 'react-bootstrap/Nav';

function Navbar() {

  return (
<div className='navbar'>
    <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/">Read-A-Lot</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav.Item>
        </Nav>
</div>
  );
}

export default Navbar;