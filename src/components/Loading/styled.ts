import styled from 'styled-components'

export const Container = styled.div``

export const StripLoadingWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`
interface ItemProps {
  index: number;
}
export const StripLoadingItem = styled.li<ItemProps>`
  --time: ${(props: ItemProps) => `${props.index * 200}ms`};
  border-radius: 3px;
  width: 6px;
  height: 30px;
  background-color: #f66;
  animation: beat 1.5s ease-in-out var(--time) infinite;
  list-style: none;
  & + li {
    margin-left: 5px;
  }
  @keyframes beat {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.5);
    }
  }
`

export const HeartLoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`

export const HeartLoadingList = styled.ul`
  display: flex;
  justify-content: space-between;
  --line-count: 9;
  width: 150px;
  height: 10px;
`

export const HeartLoadingItem = styled.li<ItemProps>`
  --Θ: ${(props: ItemProps) => `${(props.index / 9) * 0.5}turn`};
  --time: ${(props: ItemProps) => `${props.index * 40}ms`};
  --line-index: ${(props: ItemProps) => props.index};
  border-radius: 5px;
  width: 10px;
  height: 10px;
  background-color: #3c9;
  filter: hue-rotate(var(--Θ));
  animation-duration: 1s;
  animation-delay: var(--time);
  animation-iteration-count: infinite;
  list-style: none;
  &.line-1,
  &.line-9 {
    animation-name: line-move-1;
  }
  &.line-2,
  &.line-8 {
    animation-name: line-move-2;
  }
  &.line-3,
  &.line-7 {
    animation-name: line-move-3;
  }
  &.line-4,
  &.line-6 {
    animation-name: line-move-4;
  }
  &.line-5 {
    animation-name: line-move-5;
  }
  @keyframes line-move-1 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 30px;
      transform: translate3d(0, -15px, 0);
    }
  }
  @keyframes line-move-2 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 60px;
      transform: translate3d(0, -30px, 0);
    }
  }
  @keyframes line-move-3 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 80px;
      transform: translate3d(0, -40px, 0);
    }
  }
  @keyframes line-move-4 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 90px;
      transform: translate3d(0, -30px, 0);
    }
  }
  @keyframes line-move-5 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 90px;
      transform: translate3d(0, -20px, 0);
    }
  }
`
