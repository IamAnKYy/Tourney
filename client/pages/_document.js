import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <div className='flex flex-row'>
        <div className='w-[80%]'>
        <Main />
        </div>
        <div className='w-[20%]' >
<SideBar/>
        </div>

        </div>
        <NextScript />
      </body>
    </Html>
  )
}
