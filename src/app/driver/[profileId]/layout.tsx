import React from 'react'
import { DriverNavbar } from '@/components'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    <DriverNavbar/>
    {children}
    </>
  )
}

export default layout