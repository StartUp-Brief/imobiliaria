import React from 'react'
import urbano1 from '../../img/urbano/urbano1.png'
import './ImageDisplay.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const ImageDisplay = ({imagem, complemento, desc, cidade, bairro})=>{
    const url = require(`../../${imagem}`)
    console.log(url)
    console.log(urbano1)
    return(
        <Card className="imovel" style={{ width: '18rem' }}>
            <Card.Img className="imovel_img" variant="top" src={url} />
            <Card.Body>
                <Card.Title>{complemento}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Button className="Btn">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{cidade} / {bairro}</small>
            </Card.Footer>
        </Card>
    )
}

export default ImageDisplay
