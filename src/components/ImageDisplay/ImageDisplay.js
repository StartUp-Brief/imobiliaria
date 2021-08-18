import React, { Fragment } from 'react'
import urbano1 from '../../img/urbano/urbano1.png'
import './ImageDisplay.css'
import Card from 'react-bootstrap/Card'

const ImageDisplay = ({ imagem, alt }) => {
    const url = require(`../../${imagem}`)
    console.log(url)

    return (
        <Card className="img">
            <Card.Img variant="top" src={url.default} />
        </Card>
    )
}

export default ImageDisplay
