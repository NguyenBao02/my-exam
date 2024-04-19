import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";

const ModalCreateUser = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [preview, setPreview] = useState('');

    const handleUpLoadPreview = (event) => {
        setPreview(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <>
            <Button variant="primary" onClick={() => handleShow()}>
                Add New User
            </Button>
            <Modal className='modalCreateUser' show={show} onHide={handleClose} size='lg' backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row mb-2'>
                        <div className='col-lg-6'>
                            <label className='mb-1'>Email</label>
                            <input className='form-control' value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className='col-lg-6'>
                            <label className='mb-1'>Password</label>
                            <input className='form-control' value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-lg-6'>
                            <label className='mb-1'>Username</label>
                            <input className='form-control' value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className='col-lg-6'>
                            <label className='mb-1'>Role</label>
                            <select className='form-control' value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value={'USER'}>USER</option>
                                <option value={'ADMIN'}>ADMIN</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 mb-1'>
                            <label className='mb-1 image-upload' htmlFor='label-upload'><FcPlus /> Upload To Image</label>
                            <input id='label-upload' className='form-control' type='file' hidden onChange={(event) => handleUpLoadPreview(event)} />
                        </div>
                        <div className='col-lg-12'>
                            <div className='img-preview'>
                                {preview
                                    ?
                                    <img src={preview} />
                                    :
                                    <span>Preview Image</span>
                                }
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreateUser;