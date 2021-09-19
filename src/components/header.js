import * as React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Link } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <Box background="rebeccapurple" marginBottom="1.45rem">
    <Box margin="0 auto" maxWidth="960" padding="1.45rem 1.0875rem">
      <Heading as="h1" margin={0}>
        <Link as={GatsbyLink} to="/" color="white" textDecoration="none">
          {siteTitle}
        </Link>
      </Heading>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
