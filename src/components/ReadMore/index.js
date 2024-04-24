// importing useState hook
import {useState} from 'react'

// importing Styled components.
import {
  MainContainer,
  SubCards,
  Heading,
  Text,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const para = reactHooksDescription.slice(0, 170)

  const [more, toggleMore] = useState(false)

  const changeContent = () => {
    toggleMore(prevState => !prevState)
  }

  return (
    <MainContainer>
      <SubCards>
        <Heading>React Hooks</Heading>
        <Text>Hooks are a new addition to React</Text>
      </SubCards>
      <SubCards>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Text para>{more ? reactHooksDescription : para}</Text>
      </SubCards>
      <Button type="button" onClick={changeContent}>
        {more ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
