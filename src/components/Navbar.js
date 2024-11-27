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
    );
};