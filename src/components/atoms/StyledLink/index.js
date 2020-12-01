import styled from "styled-components";

const Link = ({ onClick, label, className }) => ( <
    a className = { className }
    onClick = { onClick } > { label } <
    /a>
);

const StyledLink = styled(Link)
`
  color: #fffffe;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px solid #fffffe;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #b8c1ec;
    border-bottom: 2px solid #b8c1ec;
  }
`;

export default StyledLink;