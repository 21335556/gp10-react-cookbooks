import Styled from 'styled-components'

import border from '../styles/border'

const SearchContainer = Styled.div`
  padding: .12rem .15rem;
`

const InputContainer = Styled.div`
  height: 0.4rem;
  border-radius: .04rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  background: ${props => props.background};
  img {
    width: .2rem;
    height: .2rem;
  }
`

const BorderedInputContainer = border({
  component: InputContainer,
  borderRadius: 0.04,
  borderColor: '#ee742f'
})

export {
  SearchContainer,
  InputContainer,
  BorderedInputContainer
}