import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import 'styles/index.scss'
import layoutStyles from 'components/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
