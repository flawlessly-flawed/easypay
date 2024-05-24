import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-[#1C1C1C] overflow-hidden'>
    <Navbar/>
    <Signup/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
