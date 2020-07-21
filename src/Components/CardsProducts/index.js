import React, {Component} from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import {api} from '../../services/api';

class CardsProducts extends Component {
    
    state = {

        characters: [
            {

            }
        ]
    }
    
    async componentDidMount(){
        const starwars_api = await api.get('all.json')

        this.setState({
            characters: starwars_api.data
        })
    };

    render(){

        return(
            <>

                {this.state.characters.map( characters =>
                    
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={characters.image} />
                    <Card.Body>
                        <Card.Title>{characters.name}</Card.Title>
                        <Card.Text>
                        {characters.planet}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
            )}
        </>
        )
        
    }
} 

export default CardsProducts;