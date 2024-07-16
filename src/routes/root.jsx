import {useState, useEffect} from 'react';
import { Outlet, Link, } from 'react-router-dom';
import { Navbar, Button } from "flowbite-react";
import { FooterComponent } from '../components/Footer';
// import Footer from "../components/Footer";
// import BottonNavigation from '../components/BottonNavigation';

export default function Root() {

    return (
      <>
        <main className="bg-background text-colorText min-h-screen font-alternative p-4 flex flex-col">
            <header className='flex justify-betweem items-center w-full'>              
                <Navbar fluid rounded className='w-full text-primary'>
                    <Navbar.Brand as={Link} href="https://flowbite-react.com">
                        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    </Navbar.Brand>
                    <div className="flex gap-2 md:order-2">
                        <Button className='bg-primary text-white hover:bg-purple-950'>Get started</Button>
                        <Navbar.Toggle className='bg-white text-primary' />
                    </div>
                    <Navbar.Collapse >
                        <Navbar.Link className='text-primary' href="#" active>
                        Home
                        </Navbar.Link>
                        <Navbar.Link className='text-primary' as={Link} href="#">
                        About
                        </Navbar.Link>
                        <Navbar.Link className='text-primary' href="#">Services</Navbar.Link>
                        <Navbar.Link className='text-primary' href="#">Pricing</Navbar.Link>
                        <Navbar.Link className='text-primary' href="#">Contact</Navbar.Link>
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