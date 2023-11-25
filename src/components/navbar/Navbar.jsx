import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import '../../app.scss'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {

        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {

        window.addEventListener("scroll", isActive);

        return () => {

            window.removeEventListener("scroll", isActive);
        }
    })

    // const currentUser = null;

    const currentUser = {
        id: 1,
        username: "",
        isSeller: true
    }

    return (
        <div className={pathname !== '/' || active ? "navbar active" : "navbar"}>

            <div className="container">

                <div className="logo">
                    <Link to="/" className='link'>
                        <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>

                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser &&
                        (
                            <div className='user' onClick={() => setOpen(!open)}>
                                <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                                <span>{currentUser?.username}</span>
                                {
                                    open && <div className="options">
                                        {
                                            currentUser?.isSeller && (
                                                <>
                                                    <Link to="/mygigs" className='link'>Gigs</Link>
                                                    <Link to="/add" className='link'>Add New Gig</Link>
                                                </>
                                            )
                                        }
                                        <Link to="/orders" className='link'>Orders</Link>
                                        <Link to="/messages" className='link'>Messages</Link>
                                        <Link to="/" className='link'>Logout</Link>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>

            </div>
            {(active || pathname!=="/") && (
                <>
                    <hr />

                    <div className="menu">
                        <Link to="/" className='link menulink'>
                            Graphics & Design
                        </Link>
                        <Link to="/" className='link menulink'>
                            Video & Animation
                        </Link>
                        <Link to="/" className='link menulink'>
                            Writing & Translation
                        </Link>
                        <Link to="/" className='link menulink'>
                            AI Services
                        </Link>
                        <Link to="/" className='link menulink'>
                            Digital Marketing
                        </Link>
                        <Link to="/" className='link menulink'>
                            Music & Audio
                        </Link>
                        <Link to="/" className='link menulink'>
                            Programming & Tech
                        </Link>
                        <Link to="/" className='link menulink'>
                            Business
                        </Link>
                        <Link to="/" className='link menulink'>
                            Lifestyle
                        </Link>
                    </div>
                </>)
            }

        </div>
    )
}

export default Navbar
