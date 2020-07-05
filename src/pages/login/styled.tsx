import styled from 'styled-components'
import bg from 'static/images/both-hands-stained-with-paints-1161542.jpg'

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(${bg});
  background-size: cover;
`

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  padding: 20px 0;
  background: white;
  border-radius: 8px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-shadow: 0 6px 20px 5px rgba(40, 120, 255, 0.1),
    0 16px 24px 2px rgba(0, 0, 0, 0.05);
`

export const Title = styled.div`
  padding: 60px 0 60px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  line-height: 34px;
  color: #396afe;
`

export const Slogan = styled.p`
  line-height: 2;
  font-weight: normal;
  font-size: 14px;
  color: #9fa2a8;
`

export const Form = styled.div`
  width: 330px;
`

export const InputBox = styled.div`
  &.mt8 {
    margin-top: 8px;
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  font-family: 'PingFang SC';
  line-height: 16px;
  color: rgba(0, 0, 0, 0.54);
`

export const Tip = styled.p`
  margin-top: 20px;
  font-size: 12px;
  line-height: 17px;
  color: #9fa2a8;
`
