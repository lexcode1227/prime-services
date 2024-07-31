import { Outlet, Link, useLocation, } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import { FooterComponent } from '../components/Footer';

export default function Root() {
    let {pathname} = useLocation();
    return (
      <>
        <main className="bg-background text-colorText min-h-screen font-alternative flex flex-col">
            <header className='flex justify-betweem items-center w-full'>              
                <Navbar fluid rounded className='w-full py-[26px] bg-primary text-white rounded-none'>
                    <Navbar.Brand as={Link} href="/">
                        <img src="/primeServicesLogo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">Prime Services</span>
                    </Navbar.Brand>
                    <div className="flex gap-2 md:order-2">
                        <Link to="/careers" className='bg-primary text-white hover:bg-purple-950 border border-solid border-white font-bold rounded-md py-2 px-4'>Apply Now</Link>
                        <Navbar.Toggle className='bg-white text-primary' />
                    </div>
                    <Navbar.Collapse className=''>
                        <Navbar.Link className={`text-white text-lg hover:text-purple-950 md:hover:text-purple-950 ${pathname!=="/" ? "" : "text-purple-950" }`} href="/">
                          Home
                        </Navbar.Link>
                        <Navbar.Link className={`text-white text-lg hover:text-purple-950 md:hover:text-purple-950 ${pathname!=="/about-us" ? "" : "text-purple-950" }`} href="/about-us">About</Navbar.Link>
                        <Navbar.Link className={`text-white text-lg hover:text-purple-950 md:hover:text-purple-950 ${pathname!=="/services" ? "" : "text-purple-950" }`} href="/services">Services</Navbar.Link>
                        <Navbar.Link className={`text-white text-lg hover:text-purple-950 md:hover:text-purple-950 ${pathname!=="/careers" ? "" : "text-purple-950" }`} href="/careers">Careers</Navbar.Link>
                        <Navbar.Link className={`text-white text-lg hover:text-purple-950 md:hover:text-purple-950 ${pathname!=="/contact" ? "" : "text-purple-950" }`} href="/contact">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <Outlet/>
            <section className="flex justify-center">
              <FooterComponent/>
            </section>
        </main>
      </>
    );
  }