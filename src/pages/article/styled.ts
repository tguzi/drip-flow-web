import styled from 'styled-components'

export const Content = styled.article`
  width: 1100px;
  margin: 50px auto 20px;
  background: #fff;
  border-radius: 5px;
`

export const Info = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: #999;
  font-size: 12px;
  padding: 0 10px;
  border-left: 1px solid #e5e5e5;
  &:first-child {
    border: none;
  }
  span {
    margin: 0 3px;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  line-height: 1.3;
  padding: 20px 20px 0;
`

export const Cover = styled.img`
  max-width: 100%;
  margin: 0 auto;
  padding: 15px;
`
