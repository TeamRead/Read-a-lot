import Nav from 'react-bootstrap/Nav';

function Navbar() {

  return (
<div className='navbar'>
    <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <div className='homeTab'>
            <Nav.Item>
                <Nav.Link href="/">Read-A-Lot</Nav.Link>
            </Nav.Item>
            </div>
            <div className='favTab'>
            <Nav.Item>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav.Item>
            </div>
        </Nav>
</div>
  );
}

export default Navbar;