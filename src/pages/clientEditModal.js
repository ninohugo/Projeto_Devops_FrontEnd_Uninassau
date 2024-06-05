import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import * as apiService from '../services/apiService';

function ClientEditModal({ client, show, onHide, fetchData }) {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');

    useEffect(() => {
        if (client) {
            setId(client.clientId);
            setNome(client.clientName);
            setEmail(client.clientEmail);
            setEndereco(client.clientAddress);
            setCpf(client.clientCpf);
        }
    }, [client]);

    const btnPutFunctionClick = async (event) => {
        event.preventDefault();
        await apiService.clientPut(id, nome, email, endereco, cpf);
        fetchData();
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Container style={{ width: 500, padding: 10 }}>
                <Form noValidate onSubmit={btnPutFunctionClick}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="ID"
                            aria-label="ID"
                            aria-describedby="basic-addon1"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            readOnly
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Seu nome"
                            aria-label="nome"
                            aria-describedby="basic-addon1"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Endereço de e-mail"
                            aria-label="e-mail"
                            aria-describedby="basic-addon2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputGroup.Text id="basic-addon2">@exemplo.com</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Endereço"
                            aria-label="endereco"
                            aria-describedby="basic-addon1"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="CPF"
                            aria-label="cpf"
                            aria-describedby="basic-addon1"
                            value={cpf}
                            readOnly
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </InputGroup>
                    <Button variant="secondary" style={{ width: 100, margin: 15 }} onClick={onHide}>Cancelar</Button>
                    <Button variant="primary" style={{ width: 150, margin: 15 }} type="submit">Salvar Alterações</Button>
                </Form>
            </Container>
        </Modal>
    );
}

export default ClientEditModal;

