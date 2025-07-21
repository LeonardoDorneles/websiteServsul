import "./globals.css";
import {Header} from '../components/header/'
import {Hero} from '../components/hero'
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />

        {children}
      </body>
    </html>
  );
}
