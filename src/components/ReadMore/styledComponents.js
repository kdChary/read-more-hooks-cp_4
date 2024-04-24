import styled from 'styled-components'

// Styling container elements
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`
const SubCards = styled.div`
  width: 80%;
  @media (min-width: 768px) {
    width: 600px;
  }

  display: flex;
  flex-direction: column;
  padding: 0 2.3vw;
`

// Styling Text content
const Heading = styled.h2`
  font-family: 'Roboto';
  color: #1e293b;
  text-align: center;
  margin-bottom: 0;
`

const Text = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.para ? '11px' : '15px')};
  font-weight: ${props => !props.para && '500px'};

  text-align: ${props => (props.para ? 'left' : 'center')};
  line-height: 1.5;
  color: #334155;
`

// Styling Button

const Button = styled.button`
  border: solid 1.3px #1f81ff;
  border-radius: 4px;
  background: #1f81ff;

  padding: 4px 11px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;

  color: #ffffff;
  outline: none;
  cursor: pointer;
`

// Styling image
const Image = styled.img`
  width: 290px;
  @media (min-width: 768px) {
    width: 550px;
  }
  align-self: center;
`
export {MainContainer, SubCards, Heading, Text, Button, Image}
