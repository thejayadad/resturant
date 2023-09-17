import Provider from '@/SessionProvider'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'DaMarket',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
        {children}
        </Provider>
        <Footer />
       </body>
    </html>
  )
}
