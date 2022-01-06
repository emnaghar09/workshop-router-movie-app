import React from 'react'
// import {useState} from 'react';
    import {Card, Button} from 'react-bootstrap';
    // import Rate from './rating'
    import './cards.css'
    import {Link} from 'react-router-dom';


function MovieCard ({movie}) {
    console.log(movie)
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
        return (  
        <div >
            <Card style={{ width: '18rem' }} className="movie">
        <Card.Img className='affiche' variant="top" src= {movie.affiche} />
        <Card.Body>
        <Card.Title className='title'> {movie.title} </Card.Title>
        <Card.Text className="genre">
        {movie.genre}
        </Card.Text>
        
        <Link to={`/Details/${movie.id}`}>
        <Button variant="secondary" >
           DETAILS
            </Button>
            </Link>
    </Card.Body>
    </Card>
        </div>
            )
    
    }

export default MovieCard

        {/* <Card.Text className="descript">
        {movie.description}
        </Card.Text> */}
        {/* <Card.Text className="rate"> <Rate rate={movie.rate} />
        </Card.Text> */}
        {/* <a class="btn btn-primary" href={movie.trailer} role="button">Link</a> */}
        
        
        
        {/* <Button variant="warning" onClick={handleShow} className="btnadd">
        View trailer
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {movie.trailer}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            
        </Modal.Footer>
        </Modal>
        */}