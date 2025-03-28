import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import SignupForm from '../components/SignupForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Tech Info Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Header />
        <main className="flex-grow px-4 py-8 space-y-16">
          <Section title="Section 1" />
          <Section title="Section 2" />
          <Section title="Section 3" />
          <SignupForm />
        </main>
        <Footer />
      </div>
    </>
  )
}
