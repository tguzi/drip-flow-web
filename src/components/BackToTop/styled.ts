import styled from 'styled-components'

interface Props {
  animated?: boolean;
}

export const StyledBackToTop = styled.img<Props>`
  position: fixed;
  bottom: 160px;
  right: 100px;
  width: 50px;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  transition: all 0.3s;
  &.show {
    opacity: 1;
    pointer-events: auto;
  }

  &.animated {
    animation-duration: ${(props: Props) => (props.animated ? '1s' : '0')};
    animation-fill-mode: ${(props: Props) =>
    props.animated ? 'both' : 'none'};
    animation-name: ${(props: any) =>
    props.animated ? 'bounceOutUp' : 'none'};
  }

  @keyframes bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0) scaleY(0.985);
    }

    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0) scaleY(0.9);
    }

    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0) scaleY(3);
    }
  }
`
