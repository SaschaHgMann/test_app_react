import { keyframes } from "styled-components";

export const fadeInLeftRight = keyframes`
from{
opacity: 0;
transform: translate3d(-300px, -100px, 0)
}

50% {
    opacity: 1;
    transform: translate3d(0, 0, 0)
}

to {
    opacity: 1;
    transform: translate3d(300px, -100px, 0)
}
`;

export const fadeInHeadline = keyframes`
from {
opacity: 0;
transform: translate3d(-300px, 100px, 0)
}

to {
    opacity: 1;
    transform: translate3d(0, 0, 0)

}
`;
