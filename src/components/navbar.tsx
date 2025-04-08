import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Screens } from "enums";

const Nav = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.separatorColor};
  border-top: 1px solid ${(props) => props.theme.separatorColor};
  background-color: ${(props) => props.theme.backgroundColor};

  @media only screen and (max-width: 600px) {
    bottom: 0;
  }
`;

const List = styled.div`
  margin: 0 auto;
  max-width: 575.98px;
  display: flex;
  list-style: none;
  justify-content: space-around;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  margin-top: 15px;
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.menuIconsColor};
  position: relative;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.successColor};
  position: absolute;
  top: 16px;
  left: 16px;
  border-radius: 50%;
`;

export default function Navbar({ theme }: { theme: Theme }) {
  const { primaryColor } = theme;
  const active = { color: primaryColor };

  return (
    <Nav>
      <List>
        <ListItem>
          <StyledLink aria-label="Home" activeStyle={active} to={Screens.HOME}>
            <FontAwesomeIcon icon="volleyball" />
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            aria-label="Players"
            activeStyle={active}
            to={Screens.PLAYERS}
          >
            <FontAwesomeIcon icon="users" />
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            aria-label="Board"
            activeStyle={active}
            to={Screens.BOARD}
          >
            <FontAwesomeIcon icon="rectangle-list" />
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            aria-label="Settings"
            activeStyle={active}
            to={Screens.SETTINGS}
          >
            <FontAwesomeIcon icon="cog" />
          </StyledLink>
        </ListItem>
      </List>
    </Nav>
  );
}
