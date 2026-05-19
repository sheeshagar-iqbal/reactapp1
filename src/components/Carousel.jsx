
import Carousel from 'react-bootstrap/Carousel';
import myimg1 from '../images/img5.jpg'
import myimg2 from '../images/img6.jpg'
import myimg3 from '../images/img7.jpg'

const Carousels = () => {
  return (
    <>
     <Carousel>
      <Carousel.Item>
        <img src={myimg1} alt="" srcset="" height='400px' width='100%'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={myimg2} alt="" height='400px' width='100%'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={myimg3} alt=""  height='400px' width='100%'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carousels