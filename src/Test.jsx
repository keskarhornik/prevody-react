import { useState } from "react";
import { Card, InputGroup, Row, Col, Button, OverlayTrigger, Popover } from "react-bootstrap";

// Generates a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(max) {
  const rawFloat = Math.random() * max;
  return Math.round(rawFloat * 100) / 100;
}

class Uloha {
    /**@type {string}*/
    JednotkyZ
    JednotkyD
    /**@type {number}*/
    cislo
    cisloS
    constructor(jednotkyArr = []) {
        do{
            this.JednotkyZ = jednotkyArr[getRandomInt(0,jednotkyArr.length-1)]
            this.JednotkyD = jednotkyArr[getRandomInt(0,jednotkyArr.length-1)]
        }while(this.JednotkyD == this.JednotkyZ)
        this.cislo = getRandomFloat(1000)
        const exponent = 3 * (jednotkyArr.indexOf(this.JednotkyZ) - jednotkyArr.indexOf(this.JednotkyD));
        this.cisloS = Math.round(this.cislo * Math.pow(10, exponent) * 100) / 100;
    }
}
// Fix props: use object destructuring { jednotky } instead of array []
export default function MainForm({ jednotky }) {
  const [number, setNumber] = useState([new Uloha(jednotky)]);
  const [text, setText] = useState("");
  
  const [dynamicPopover, setDynamicPopover] = useState((
        <Popover className="text-bg-warning">
          <Popover.Header as="h3" className="text-bg-warning">Upozornění</Popover.Header>
          <Popover.Body className="text-bg-warning">
            Vyskytla se neznámá chyba
          </Popover.Body>
        </Popover>));
  

  function handleNextQuestion() {
    if (text === "") {
      setDynamicPopover((
        <Popover className="text-bg-warning">
          <Popover.Header as="h3" className="text-bg-warning">Upozornění</Popover.Header>
          <Popover.Body className="text-bg-warning">
            Vyplňte odpověď
          </Popover.Body>
        </Popover>))

    } else {
        if (Math.abs(number[number.length-1].cisloS - parseFloat(text)) < 0.01) {
          const stepArr = number.slice();
          stepArr.push(new Uloha(jednotky))
          setNumber(stepArr)
          setText("");
          setDynamicPopover((
            <Popover className="text-bg-success">
              <Popover.Header as="h3" className="text-bg-success">Upozornění</Popover.Header>
              <Popover.Body className="text-bg-warning">
                Vyplňte odpověď
              </Popover.Body>
            </Popover>))
        }   
    }
  }

  

  return (
    <Card className="text-center text-bg-info">
      <Card.Header>Převeď</Card.Header>

      <Card.Title className="mt-3">{number[number.length-1].cislo+" "+number[number.length-1].JednotkyZ}</Card.Title>

      <Card.Body>
        <InputGroup>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <InputGroup.Text>{number[number.length-1].JednotkyD}</InputGroup.Text>
        </InputGroup>
      </Card.Body>

      <Card.Footer>
        <Row>
          <Col>
            <Button className="btn-danger w-100" onClick={() => setText("")}>
              Reset question
            </Button>
          </Col>
          <Col>
            <OverlayTrigger show={showPopover} placement="top" rootClose overlay={dynamicPopover}>
              <Button className="btn-primary w-100" onClick={handleNextQuestion}>
                Enter
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}









