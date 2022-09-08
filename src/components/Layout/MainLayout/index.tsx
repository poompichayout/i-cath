import { PropsWithChildren } from 'react'

import Navbar from 'src/components/Navbar'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '60px' }}>{children}</main>
    </div>
  )
}

export default MainLayout
