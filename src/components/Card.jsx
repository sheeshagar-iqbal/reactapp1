import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import t1 from '../images/t1.jpg'
import t2 from '../images/t2.jpg'
import t3 from '../images/t3.jpg'
import t4 from '../images/t4.jpg'
import t5 from '../images/t5.jpg'
import t6 from '../images/t6.jpg'

const Cards = () => {
  return (
    <>

           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={t3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     
    
    </>
  )
}

export default Cards