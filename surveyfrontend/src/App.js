import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
import {Rating} from 'react-simple-star-rating'
import {useState} from "react";


function App() {
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }
    return (
        <div className="App">
            <br/>
            <Form className={"form"}>
                <h1 className={"title"}>
                    Selbstbeurteilung - wöchentlich
                </h1>
                <Form.Text>
                    Hallo! Bitte fülle dieses Formular wöchentlich vor dem Feedback-Gespräch mit deiner/deinem Ausbildner*in aus. Wenn die Leistung während den ersten drei Monaten (Probezeit) stetig gut bleibt, reicht es, wenn Du dies jede 2. Woche ausfüllst (nach Vereinbarung mit Ausbildner*in).
                </Form.Text>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={"input-label"}>1. Vor- Nachname</Form.Label>
                    <Form.Control type="text" className="name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={"input-label"}>2. Motivation</Form.Label>
                    <br/>
                    <Rating className={"motivation"} onClick={handleRating} ratingValue={rating}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={"input-label"}>3. Falls deine Motivation diese Woche drei oder weniger Sterne beträgt, bitte schreibe kurz warum:</Form.Label>
                    <Form.Control className="reasonMotivation" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={"input-label"}>4. Team</Form.Label>
                    <br/>
                    <Rating className={"team"} onClick={handleRating} ratingValue={rating}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={"input-label"}>5. Falls deine Antwort bei Frage 5 drei oder weniger Sterne beträgt, bitte schreibe kurz warum:</Form.Label>
                    <Form.Control className={"reasonTeam"} type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={"input-label"}>6. Arbeiten</Form.Label>
                    <br/>
                    <Rating className={"work"} onClick={handleRating} ratingValue={rating}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={"input-label"}>7. Falls Du deine Leistung mit drei oder weniger Sternen beurteilt hast, bitte schreibe kurz warum:</Form.Label>
                    <Form.Control className={"reasonWork"} type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={"input-label"}>8. Wie war die Zusammenarbeit mit deiner/deinem Ausbildner*in?</Form.Label>
                    <Form.Control className="teamworkTrainer" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={"input-label"}>9. Falls deine Motivation diese Woche drei oder weniger Sterne beträgt, bitte schreibe kurz warum:</Form.Label>
                    <Form.Control className="extraField" as="textarea" rows={3} />
                </Form.Group>
                <Button type={"submit"}>Absenden</Button>
            </Form>
        </div>
    );
}

export default App;
