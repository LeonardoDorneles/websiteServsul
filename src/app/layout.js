import "./globals.css";
import {Header} from '../components/header'
import {Hero} from '../components/hero'
import Services from '../components/services'
import { Location } from '@/components/location';
import Contacts from '@/components/contacts'
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Header />
        <Hero />
        <Services />
        <Location />
        <Contacts />


        
      </body>
    </html>
  );
}
