import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  width: ${(props) => (props.act ? "0px" : "158px")};
  padding: ${(props) => (props.act ? "0px" : "1rem 1rem 0 0")};
  height: 100vh;
  background-color: var(--first-color);
  transition: 0.5s;
  z-index: var(--z-fixed);
  @media only screen and (min-width: 280px) {
    padding: 1rem 1rem 0 0;
    background-color: #141e3c;
    margin-left: 0px;
    width: ${(props) => (!props.act ? "250px" : "80px")};
  }
`;
// @media only screen and (max-width: 375px) {
//   padding: 1rem 1rem 0 0;
//   background-color: #141E3C;
//   margin-left: 0px;
//   width: ${(props) => (!props.act ? '100px' : '80px')};
// }

export const SidebarMenuContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 0px; // Hide the scrollbar for WebKit browsers
  }
  -ms-overflow-style: none; // Hide the scrollbar for Internet Explorer and Edge
  scrollbar-width: none; // Hide the scrollbar for Firefox
`;

export const StyledNavLink = styled(Link)`
display: grid;
grid-template-columns: max-content max-content;
column-gap: 1rem;
padding: 1rem 0 0.5rem 1.5rem;
margin-top: 1rem;
text-decoration: none;
border-color: white;
text-decoration: "none",
i {
  margin-top:-150px
  font-size: .1rem;
  margin-left:7px;
  color: #999fb5;
}

span {
  color: #606781;
  font-weight: 400;
  font-size: 1.0rem;
  text-transform: capitalize;
}
&:hover {
  opacity: 100%;
}
  &:hover {
    // text-decoration: underline;
  }
 &[aria-current] {
    color: red;
  }
  
`;
// border-style: ${(props) => (!props.act ? 'solid' : 'none')};
export const LogoContainer = styled(StyledNavLink)`
  opacity: 100%;
  text-decoration: none;
  backgroun-color: #fff !important;
  margin: -7px;
  i:hover {
    margin-left: -7px;
    transition: 0.1s;
    font-size: 2rem;
  }
  i {
    margin-top: -9px;
    font-size: 0rem;
    margin-left: ${(props) => (!props.act ? "17px" : "-10px")};
  }
  img {
    width: 64px;
    height: auto;
    background-color: white;
    border-radius: 76px;
  }
`;

export const LogoOut = styled(StyledNavLink)`
  padding-top: 10%;
  text-decoration: none;
  border-style: none;
  padding-bottom: 2rem;
  margin-left: -25px;
`;
