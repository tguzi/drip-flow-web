import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 560px;
  background: white;
  border-radius: 8px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-shadow: 0 6px 20px 5px rgba(40, 120, 255, 0.1),
    0 16px 24px 2px rgba(0, 0, 0, 0.05);
`
export const Title = styled.div`
  padding: 81px 0 60px;
  font-size: 36px;
  font-family: 'PingFang SC';
  font-weight: bold;
  line-height: 34px;
  color: #396afe;
`

export const Form = styled.form`
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
