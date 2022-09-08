import { PropsWithChildren } from 'react'

import Navbar from '../Navbar'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '60px' }}>{children}</main>
    </div>
  )
}

export default Layout
