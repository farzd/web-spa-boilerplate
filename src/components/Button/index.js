import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ className, children, onClick, disabled }) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

const StyledButton = styled(Button)`
  padding: ${props => props.theme.rem(10)};
  width: auto;
  color: ${props => props.theme.background};
  background: ${props => props.theme.primary};
  cursor: pointer;

  &:disabled {
    background: ${props => props.theme.secondary};
  }
`

export default StyledButton

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired
}

Button.defaultProps = {
  className: 'button',
  disabled: false,
  onClick: () => {}
}
