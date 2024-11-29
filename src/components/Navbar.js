import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

export default function Navbar() {

    const dispatch = useDispatch();

    const { cart, totalQuantity } = useSelector((state) => (state.allCart))

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart, dispatch])


    return (
        <>
            <MDBNavbar light bgColor='light' id='navbar'>
                <MDBContainer fluid>
                    <MDBNavbarBrand><img src='/Group 1.png' alt='Logo' /></MDBNavbarBrand>

                    <MDBBtn color='light' rippleColor='dark'>
                        <Link to='/' style={{ color: '#000' }}>Allproducts</Link>
                    </MDBBtn>
                    <MDBBtn color='dark'>
                        <Link to='/cartpage' style={{ color: '#fff' }}>Cart({totalQuantity})</Link>
                    </MDBBtn>

                </MDBContainer>
            </MDBNavbar>

            <nav className="navbar navbar-expand-lg" id='navbar'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        {/* <i class="bi bi-list"></i> */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" id='nav'>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Allproducts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item dropdown" id='dropdown'>
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <Link to='/cartpage' className='carticon pe-3'>
                        <i class="bi bi-plus"></i>
                    </Link>

                    <Link to='/cartpage' className='carticon'>
                        <i class="bi bi-bag-plus"></i>
                        <sup className='px-1 rounded-pill'>0</sup>
                    </Link>

                </div>

            </nav>


        </>
    );
};