import Search from "./components/Search";
import Pages from "./pages/Pages"
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={"/"}>Cusine-Companion</Logo>
    </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
    </div>

    
  );
}
const Logo = styled(Link)
`
  text-decoration: none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two',cursive;
`
const Nav = styled.div
`
  padding: 4rem 0rem;
  display : flex;
  justify-content:center;
  svg
  {
    font-size:2rem;
    margin-right:15px;
  }
`
export default App;
