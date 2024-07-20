import {useState, useEffect} from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { Navbar, Button } from "flowbite-react";
import { FooterComponent } from '../components/Footer';

export default function Root() {

    return (
      <>
        <main className="bg-background text-colorText min-h-screen font-alternative p-4 flex flex-col">
            <header className='flex justify-betweem items-center w-full'>              
                <Navbar fluid rounded className='w-full text-primary'>
                    <Navbar.Brand as={Link} href="/">
                        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">Prime Services</span>
                    </Navbar.Brand>
                    <div className="flex gap-2 md:order-2">
                        <Link to="/careers" className='bg-primary text-white hover:bg-purple-950 font-bold rounded-md py-2 px-4'>Apply Now</Link>
                        <Navbar.Toggle className='bg-white text-primary' />
                    </div>
                    <Navbar.Collapse className=''>
                        <Navbar.Link className='text-primary text-lg' href="/">
                          Home
                        </Navbar.Link>
                        <Navbar.Link className='text-primary text-lg' href="/about-us">About</Navbar.Link>
                        <Navbar.Link className='text-primary text-lg' href="/services">Services</Navbar.Link>
                        <Navbar.Link className='text-primary text-lg' href="/careers">Careers</Navbar.Link>
                        <Navbar.Link className='text-primary text-lg' href="/contact">Contact</Navbar.Link>
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