import styled from "styled-components";

const Avatar = styled.img`
  border-radius: 50%;
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "100px"};
`;
export default Avatar;
