import {useState} from "react";
import {Button, Col, Container, Form, Row, Toast, ToastContainer} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";
import {BsFillCheckSquareFill} from "react-icons/bs";

export function Survey() {
    const [questionOne, setQuestionOne] = useState("");
    const [questionTwo, setQuestionTwo] = useState(0);
    const [questionThree, setQuestionThree] = useState("");
    const [questionFour, setQuestionFour] = useState(0);
    const [questionFive, setQuestionFive] = useState("");
    const [questionSix, setQuestionSix] = useState(0);
    const [questionSeven, setQuestionSeven] = useState("");
    const [questionEight, setQuestionEight] = useState("");
    const [questionNine, setQuestionNine] = useState("");

    const [showSend, setShowSend] = useState(false);
    const [showFailed, setShowFailed] = useState(false);

    async function submit() {
        const response = await fetch('http://localhost:8080/surveys', {
            headers: new Headers({'content-type': 'application/json'}),
            method: 'POST',
            body: JSON.stringify({
                questionOne,
                questionTwo,
                questionThree,
                questionFour,
                questionFive,
                questionSix,
                questionSeven,
                questionEight,
                questionNine
            })
        })

        if (!response.ok) {
            setShowFailed(true)
        } else {
            setShowSend(true)
        }
    }

    const handleQuestionTwo = (rate: number) => {
        setQuestionTwo(rate)
    }

    const handleQuestionFour = (rate: number) => {
        setQuestionFour(rate)
    }

    const handleQuestionSix = (rate: number) => {
        setQuestionSix(rate)
    }

    return (
        <>
            <Row>
                <Col>
                    <h2 className={"title"}>
                        Selbstbeurteilung - wöchentlich
                    </h2>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h5>
                        Hallo! Bitte fülle dieses Formular wöchentlich vor dem Feedback-Gespräch mit deiner/deinem
                        Ausbildner*in aus.
                        Wenn die Leistung während den ersten drei Monaten (Probezeit) stetig gut bleibt, reicht es,
                        wenn Du dies jede 2. Woche ausfüllst (nach Vereinbarung mit Ausbildner*in).
                    </h5>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className={"input-label"}><h4>1. Email</h4></Form.Label>
                            <Form.Control onChange={e => setQuestionOne(e.target.value)} defaultValue={questionOne}
                                          className={"email"} type="email" placeholder="vorname.nachname@mgb.ch"/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className={"input-label"}><h4>2. Motivation</h4></Form.Label>
                            <br/>
                            <Rating onClick={handleQuestionTwo} className={"motivation"}
                                    ratingValue={questionTwo}/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={"input-label"}><h4>3. Falls deine Motivation diese Woche drei oder
                                weniger Sterne beträgt, bitte schreibe kurz warum:</h4></Form.Label>
                            <Form.Control onChange={e => setQuestionThree(e.target.value)} defaultValue={questionThree}
                                          className="reasonMotivation" as="textarea"
                                          rows={3}/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className={"input-label"}><h4>4. Team</h4></Form.Label>
                            <br/>
                            <Rating onClick={handleQuestionFour} className={"team"}
                                    ratingValue={questionFour}/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className={"input-label"}><h4>5. Falls deine Antwort bei Frage 5 drei oder
                                weniger Sterne beträgt, bitte schreibe kurz warum:</h4></Form.Label>
                            <Form.Control onChange={e => setQuestionFive(e.target.value)} defaultValue={questionFive}
                                          className={"reasonTeam"} type="text"/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className={"input-label"}><h4>6.
                                Arbeiten</h4></Form.Label>
                            <br/>
                            <Rating onClick={handleQuestionSix} className={"work"}
                                    ratingValue={questionSix}/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className={"input-label"}><h4>7. Falls Du deine Leistung mit drei oder weniger
                                Sternen beurteilt hast, bitte schreibe kurz warum:</h4></Form.Label>
                            <Form.Control onChange={e => setQuestionSeven(e.target.value)} defaultValue={questionSeven}
                                          className={"reasonWork"} type="text"/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={"input-label"}><h4>8. Wie war die Zusammenarbeit mit deiner/deinem
                                Ausbildner*in?</h4></Form.Label>
                            <Form.Control onChange={e => setQuestionEight(e.target.value)} defaultValue={questionEight}
                                          className="teamworkTrainer" as="textarea"
                                          rows={3}/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={"input-label"}><h4>9. Falls deine Motivation diese Woche drei oder
                                weniger Sterne beträgt, bitte schreibe kurz warum:</h4></Form.Label>
                            <Form.Control onChange={e => setQuestionNine(e.target.value)} defaultValue={questionNine}
                                          className="extraField" as="textarea"
                                          rows={3}/>
                        </Form.Group>
                        <br/>
                        <Button variant={"success"} className={"submit-button"} onClick={() => submit()}
                                type={"button"}>Absenden</Button>
                    </Form>
                </Col>
            </Row>
            <ToastContainer position={"top-start"}>
                <Toast onClose={() => setShowSend(false)} bg={"success"} show={showSend} delay={3000} autohide>
                    <Toast.Header>
                        <BsFillCheckSquareFill/>
                        <strong className="me-auto">Info</strong>
                    </Toast.Header>
                    <Toast.Body className={'text-white'}>Die Umfrage wurde abgesendet.</Toast.Body>
                </Toast>
                <Toast onClose={() => setShowFailed(false)} bg={"danger"} show={showFailed} delay={3000} autohide>
                    <Toast.Header>
                        <BsFillCheckSquareFill/>
                        <strong className="me-auto">Info</strong>
                    </Toast.Header>
                    <Toast.Body className={'text-white'}><h5>Der/Die Praktikant*in existiert nicht oder die Eingaben sind ungültig.</h5></Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}