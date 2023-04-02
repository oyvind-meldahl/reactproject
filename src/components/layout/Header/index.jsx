import Nav from "../Nav";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import Logo from "../Logo";
import { StyledHeader } from "../../../styles/components/Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <Cart />
      <Nav />
    </StyledHeader>
  );
}
