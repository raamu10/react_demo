import React, {Component} from 'react';
import Modal from 'react-bootstrap';

class EditUser extends Component {
    constructor (props) {
        super (props)

    }

    render () {
        return (
            <Modal>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary">
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EditUser;