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

  const [description, sliceDescription] = useState(para)
  const [btnText, setBtnText] = useState('Read More')

  const changeContent = () => {
    if (btnText === 'Read More') {
      setBtnText('Read Less')
    } else {
      setBtnText('Read More')
    }

    if (description.length > 170) {
      sliceDescription(para)
    } else {
      sliceDescription(reactHooksDescription)
    }
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
        <Text para>{description}</Text>
      </SubCards>
      <Button type="button" onClick={changeContent}>
        {btnText}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
