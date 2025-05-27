import Navbar from "../components/Navbar"

const Services = () => {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <Navbar/>
      <section className="flex flex-col justify-center items-center mt-16">
        <h1 className="font-extrabold text-7xl text-blue-950">Services</h1>
        <h3 className="font-bold text-sky-600 text-2xl">Home | Services</h3>
      </section>
    </main>
  )
}

export default Services