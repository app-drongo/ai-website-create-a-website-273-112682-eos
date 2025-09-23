import Hero from '@/components/sections/home/Hero'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      <section id="contact">
        <Contact />
      </section>
      <section id="cta">
        <Cta />
      </section>
      </section>
    </>
  )
}
import Contact from '@/components/sections/home/Contact'
import Cta from '@/components/sections/home/Cta'