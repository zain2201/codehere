import React from 'react'
import Modal from 'react-modal';
import Getdata from '../Getdata/Getdata'
import "./Modal.css"

const customStyles = {
    content: {
        top: '10%',
    },
};

Modal.setAppElement(document.getElementById('root'));

function Modall(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#171941';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div >
                <button className="platform-link" onClick={openModal}><span className="platform-name">{props.name}</span></button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}

                    contentLabel="Example Modal"
                >
                    <div className="contest-Modal" > <h2 ref={(_subtitle) => (subtitle = _subtitle)} ><Getdata url={props.url} /></h2>
                        <button className="btn btn-info btn-sm" onClick={closeModal}>Close</button>
                    </div>
                </Modal>
            </div>
        </>
    )
}
export default Modall;