import styled from "styled-components";

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(0.5) saturate(0.8) brightness(0.6);
`;

export default BackgroundImage;
