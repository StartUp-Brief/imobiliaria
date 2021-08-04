import React, { Fragment } from 'react'
import urbano1 from '../../img/urbano/urbano1.png'
import './ImageDisplay.css'
import Card from 'react-bootstrap/Card'

const ImageDisplay = ({imagem, alt})=>{
    const url = require(`../../${imagem}`)
    console.log(url)
    console.log(urbano1)
    return(
        <Card className="img">
            <Card.Img variant="top" src={url} />
        </Card>
    )
}

export default ImageDisplay
