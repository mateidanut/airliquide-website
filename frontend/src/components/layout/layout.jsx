/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { globalHistory } from "@reach/router"

import Header from "../header/header"
import "./layout.css"

const Layout = ({ children }) => {
  const { location, _ } = globalHistory;
  console.log('CHILLLD', location.pathname)

  return (
    <>
      <Header siteTitle="Airliquide compressor monitor" pathname={location.pathname}/>
      <div
        style={{
          maxWidth: 960,
          padding: `90px 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
