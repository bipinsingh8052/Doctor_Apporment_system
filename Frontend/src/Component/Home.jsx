import React from 'react'
import CardSsection from './CardSsection'
import Carousel from 'react-bootstrap/Carousel';
import Search from './Search';

export default function Home() {
  return (
    <>

<Carousel>
      <Carousel.Item>
      <img src="https://investin.org/cdn/shop/articles/jafar-ahmed-E285pJbC4uE-unsplash.jpg?v=1634293259" style={{width:"100%", height:"400px"}} />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Check it my all Doctor's </h3>
          <p style={{color:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://media.post.rvohealth.io/wp-content/uploads/2020/07/doctor-doing-a-medical-exam-732x549-thumbnail.jpg" alt=""  style={{width:"100%", height:"400px"}}/>
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Check it my all Doctor's </h3>
          <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg" alt=""style={{width:"100%", height:"400px"}} />
  
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Check it my all Doctor's </h3>
          <p style={{color:'black'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    <Search/>



      <CardSsection/>
    </>
  )
}
