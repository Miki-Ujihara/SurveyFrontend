import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";

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
            alert("Bad Request!")
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
            <Container className={"form"} fluid>
                <Row>
                    <Col>
                        <h1 className={"title"}>
                            Selbstbeurteilung - wöchentlich
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={"small-text"}>
                            Hallo! Bitte fülle dieses Formular wöchentlich vor dem Feedback-Gespräch mit deiner/deinem
                            Ausbildner*in aus.
                            Wenn die Leistung während den ersten drei Monaten (Probezeit) stetig gut bleibt, reicht es,
                            wenn Du dies jede 2. Woche ausfüllst (nach Vereinbarung mit Ausbildner*in).
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className={"input-label"}>1. Vor- Nachname</Form.Label>
                                <Form.Control onChange={e => setQuestionOne(e.target.value)} defaultValue={questionOne}
                                                type="text" className="name"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className={"input-label"}>2. Motivation</Form.Label>
                                <br/>
                                <Rating onClick={handleQuestionTwo} className={"motivation"}
                                        ratingValue={questionTwo}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className={"input-label"}>3. Falls deine Motivation diese Woche drei oder
                                    weniger Sterne beträgt, bitte schreibe kurz warum:</Form.Label>
                                <Form.Control onChange={e => setQuestionThree(e.target.value)} defaultValue={questionThree} className="reasonMotivation" as="textarea"
                                                rows={3}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className={"input-label"}>4. Team</Form.Label>
                                <br/>
                                <Rating onClick={handleQuestionFour} className={"team"}
                                        ratingValue={questionFour}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className={"input-label"}>5. Falls deine Antwort bei Frage 5 drei oder
                                    weniger Sterne beträgt, bitte schreibe kurz warum:</Form.Label>
                                <Form.Control onChange={e => setQuestionFive(e.target.value)} defaultValue={questionFive} className={"reasonTeam"} type="text"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className={"input-label"}>6.
                                    Arbeiten</Form.Label>
                                <br/>
                                <Rating onClick={handleQuestionSix} className={"work"}
                                        ratingValue={questionSix}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className={"input-label"}>7. Falls Du deine Leistung mit drei oder weniger
                                    Sternen beurteilt hast, bitte schreibe kurz warum:</Form.Label>
                                <Form.Control onChange={e => setQuestionSeven(e.target.value)} defaultValue={questionSeven} className={"reasonWork"} type="text"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className={"input-label"}>8. Wie war die Zusammenarbeit mit deiner/deinem
                                    Ausbildner*in?</Form.Label>
                                <Form.Control onChange={e => setQuestionEight(e.target.value)} defaultValue={questionEight} className="teamworkTrainer" as="textarea"
                                                rows={3}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className={"input-label"}>9. Falls deine Motivation diese Woche drei oder
                                    weniger Sterne beträgt, bitte schreibe kurz warum:</Form.Label>
                                <Form.Control onChange={e => setQuestionNine(e.target.value)} defaultValue={questionNine} className="extraField" as="textarea"
                                                rows={3}/>
                            </Form.Group>
                            <Button className={"submit-button"} onClick={() => submit()}
                                    type={"submit"}>Absenden</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}