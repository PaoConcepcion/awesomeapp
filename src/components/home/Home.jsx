import React from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';
import foto from '../../assets/foto.jpg';

const Home = () =>  {
  return (
    <div>
      <Container className='mt-3'>
        <Row>
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src="https://i.pinimg.com/564x/60/43/5a/60435a5e54f2386527bc7cd447ccb51e.jpg" />*/}
            <Card.Img variant="top" src={foto} />
            <Card.Body>
              <Card.Title>Paola Miramontes</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col md={8}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nibh laoreet, euismod felis 
              eget, congue sem. Sed eu cursus purus. Morbi eget urna sed magna feugiat congue ut in ante. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              Maecenas placerat nunc at neque laoreet iaculis. Class aptent taciti sociosqu ad litora torquent 
              per conubia nostra, per inceptos himenaeos. Ut at facilisis augue. Suspendisse vel fermentum ipsum. 
              Integer suscipit commodo ipsum vitae placerat. Pellentesque fringilla ligula id luctus eleifend. 
              Quisque iaculis, libero ultrices facilisis aliquam, nulla justo viverra justo, sed interdum ligula 
              ante et sapien. Duis at nibh nec felis ultricies luctus nec varius nibh. Sed nec ornare justo, et 
              pretium nisl. Mauris egestas pretium placerat. Praesent lacinia odio ut cursus hendrerit.
            </p>
            <p>
              In hac habitasse platea dictumst. Aenean ornare at ex sit amet malesuada. 
              Suspendisse ullamcorper nec purus sed aliquet. Donec at mauris a mauris iaculis placerat. 
              Sed ac massa interdum, lobortis dui ut, facilisis nulla. Duis faucibus lectus sapien, eget 
              efficitur justo volutpat sodales. Cras placerat, lorem nec tincidunt semper, odio nulla 
              eleifend ipsum, vitae aliquet ex tellus sed dolor. Vestibulum consequat tempor velit, ac 
              volutpat nunc eleifend non. Integer ut tellus ac quam vestibulum eleifend. Morbi laoreet 
              turpis eu libero convallis, ac efficitur lectus tempus. Mauris pharetra nisl et ligula consequat, 
              id fringilla magna venenatis. Sed accumsan porttitor erat, sit amet fringilla neque venenatis vel. 
              Donec sed porttitor ligula.
            </p>
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default Home;