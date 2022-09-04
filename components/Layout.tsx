import React, { ReactElement } from 'react'

interface LayoutProps {
  title: string
  children?: ReactElement
}

export const Layout = ({ title, children }: LayoutProps): ReactElement => (
  <>
    <main role="main" className="h-full w-full">
        <h1 className='text-4xl w-full text-center'>{title}</h1>
        {children}
    </main>
    <footer role="footer"></footer>
  </>
)
