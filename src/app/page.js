import Image from 'next/image'
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-10">
      <Navbar/>
<div className="container mt-24 mx-auto px-12 py-3">
      <Herosection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
      <Footer/>
      
    </main>
  )
}
