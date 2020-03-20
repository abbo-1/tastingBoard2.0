import React, { useState } from 'react';
import {  Button, Modal, Jumbotron } from 'react-bootstrap';

import AddButton from './AddButton.js'
import CardEdit from './CardEdit.js'

export default function AddDrink() {
    const [ showModal, setModal ] = useState(false)

    const turnOn = () => setModal(true);
    const turnOff = () => setModal(false);

    return (
    <div>
        <div id="jumbo-div">
            <Jumbotron>
                <AddButton onClick= {turnOn}/>
            </Jumbotron>   
        </div>

        <div id="modal-div">
        <Modal size="lg" show={ showModal } onHide= {turnOff}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Drink!</Modal.Title>
                </Modal.Header>

            <Modal.Body>
                <CardEdit />
            </Modal.Body>

            <Button onClick ={turnOn}>Close</Button>
            </Modal>
            </div>
        </div>
    )
}