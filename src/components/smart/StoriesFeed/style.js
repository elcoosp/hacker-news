import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { defaultProps } from 'recompose'

export const Author = defaultProps({ rel: 'author' })(styled(Link)``)
export const Text = styled.p``

export const Wrapper = styled.article
