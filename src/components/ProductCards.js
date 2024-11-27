import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCards() {

  const dispatch = useDispatch()
  const product = useSelector((state) => (state.allCart.items))

  const [inputText, setInputText] = useState("")

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <MDBContainer>

      <div id='search' className='pt-4'>
        <input type='text' className='w-50 rounded-8 m-auto form-control' placeholder='search your item' value={inputText} onChange={inputHandler} />
      </div>


      <MDBRow className='py-4'>
        <h2>All Products</h2>

        {product
          .filter((el)=> el && el.title.toLowerCase().includes(inputText))
          .map((items) => (

            <MDBCol size='md-3 mb-3 mt-2'>
              <MDBCard>
                <MDBCardImage src={items.img} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{items.title}</MDBCardTitle>

                  <p>Rs.{items.price}</p>
                  <MDBCardText>
                    Some quick example text to build on the card title.
                  </MDBCardText>
                  <MDBBtn href='#' onClick={() => { dispatch(addToCart(items)) }}>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

          ))
        }
      </MDBRow>
    </MDBContainer>
  );
};