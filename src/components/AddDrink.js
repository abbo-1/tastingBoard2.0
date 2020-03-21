import React, { useState } from 'react';
import {  Button, Modal, Jumbotron } from 'react-bootstrap';
import AddButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// import AddButton from './AddButton.js'
import CardEdit from './CardEdit.js'

export default function AddDrink() {
    const [ showModal, setModal ] = useState(false)

    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
      }));

    const classes = useStyles();

    const turnOn = () => {
        console.log("everything is awesome")
        setModal(true)
    }
    const turnOff = () => setModal(false);

    return (
    <div>
        <div id="jumbo-div">
            <Jumbotron>
            <AddButton
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddCircleIcon />}
                onClick = { () => turnOn() }
            >
                Add Drink
            </AddButton>
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