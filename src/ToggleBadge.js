import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme as themeGet, space, fontSize } from 'styled-system'
import theme from './theme'

const ToggleBadge = styled.div`
  border-radius: ${props => props.theme.radius};
  display: inline-block;
  font-weight: ${props => props.theme.bold};
  background-color: ${props =>
    props.selected ? props.theme.colors[props.bg] : null};
  color: ${props => props.theme.colors[props.color]};
  ${space} ${fontSize};
  &:hover {
    background-color: ${props => props.theme.colors[props.bg]};
  }
`

ToggleBadge.displayName = 'ToggleBadge'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

ToggleBadge.propTypes = {
  fontSize: numberStringOrArray,
  bg: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
  px: numberStringOrArray,
  py: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray
}

ToggleBadge.defaultProps = {
  selected: false,
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  fontSize: 0,
  theme: theme,
  color: 'darkBlue',
  bg: 'lightBlue'
}

export default ToggleBadge
