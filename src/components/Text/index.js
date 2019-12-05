import styled from 'styled-components'

const H1 = styled.h1`
  font-size: ${props => props.theme.rem(20)};
  padding-bottom: ${props => props.theme.rem(10)};
  text-transform: uppercase;
`
H1.displayName = 'H1'

const H2 = styled.h2`
  font-size: ${props => props.theme.rem(18)};
  padding-bottom: ${props => props.theme.rem(10)};
`
H2.displayName = 'H2'

const H3 = styled.h3`
  font-size: ${props => props.theme.rem(14)};
  padding-bottom: ${props => props.theme.rem(10)};
`
H3.displayName = 'H3'

const H4 = styled.h4`
  font-size: ${props => props.theme.rem(12)};
  padding-bottom: ${props => props.theme.rem(10)};
`
H4.displayName = 'H4'

const P = styled.p`
  font-size: ${props => props.theme.rem(14)};
  padding-bottom: ${props => props.theme.rem(30)};
`
P.displayName = 'P'

const A = styled.a`
  font-size: ${props => props.theme.rem(14)};
  text-decoration: underline;
  cursor: pointer;
`
A.displayName = 'A'

export { H1, H2, H3, H4, P, A }
