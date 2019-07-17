import styled from "styled-components";
import Logo from "./Logo";
import { fadeInLeftRight } from "../utils/animations";

const MainLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  animation: ${fadeInLeftRight} 4s ease-out 1 both;
`;

export default MainLogo;
