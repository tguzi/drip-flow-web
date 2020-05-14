// import React from 'react'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'

// const Container = styled.div`
//   display: flex;
//   width: ${props => props['width']};
//   flex: ${props => props['auto']};
//   flex-wrap: ${props => props['wrap']};
//   flex-basis: ${props => props['basis']};
//   flex-grow: ${props => props['grow']};
//   flex-shrink: ${props => props['shrink']};
//   align-self: ${props => props['self']};
//   flex-direction: ${props => props['column']};
//   align-items: ${props => props['align']};
//   justify-content: ${props => props['justify']};
// `

// const Flex = ({
//   children,
//   el,
//   ...restProps
// }) => (
//   <Container
//     className="my__flex"
//     as={el}
//     {...restProps}
//   >{children}</Container>
// )

// Flex.propTypes = {
//   el: PropTypes.string,
//   width: PropTypes.string,
//   flex: PropTypes.string,
//   wrap: PropTypes.string,
//   basis: PropTypes.string,
//   grow: PropTypes.number,
//   shrink: PropTypes.number,
//   self: PropTypes.string,
//   column: PropTypes.string,
//   align: PropTypes.string,
//   justify: PropTypes.string,
//   children: PropTypes.any.isRequired,
// }

// Flex.defaultProps = {
//   el: 'div',
//   width: '100%',
//   auto: 'initial',
//   wrap: 'auto',
//   basis: 'auto',
//   grow: 0,
//   shrink: 1,
//   self: 'auto',
//   column: 'row',
//   align: 'center',
//   justify: 'flex-start',
// }

// export default Flex