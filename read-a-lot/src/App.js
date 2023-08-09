import * as React from "react";
import Nav from 'react-bootstrap/Nav';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {


    return(
    <div className="App">
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

export default App;
