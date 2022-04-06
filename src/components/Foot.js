import React from 'react'
import {Card} from "react-bootstrap"

function Foot() {
    return (
        <Card style={{margin:"8px",backgroundColor:"rgb(212, 219, 232)"}}>
        <Card.Body>
            Made with ♥ by <a href="https://github.com/0907anita" target="_blank" rel="noopener noreferrer">Anita</a>{" "}|{" "}Follow on ☕{" "}<a href="https://github.com/0907anita" target="_blank" rel="noopener noreferrer">Github</a>{" "}<a href="https://www.linkedin.com/in/anita-choudhary-229608197/" target="_blank" rel="noopener noreferrer">LinkedIn</a>{" "}<a href="https://twitter.com/Anita448590591" target="_blank" rel="noopener noreferrer">Twitter</a>
        </Card.Body>
        </Card>
    )
}

export default Foot
