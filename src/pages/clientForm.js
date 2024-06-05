import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { postFunction } from "../services/apiService";
import Container from 'react-bootstrap/Container';

function ClientForm() {
    const [nome, setNome] = useState('You Username');
    const [email, setEmail] = useState('username@example.com');
    const [endereco, setEndereco] = useState('Street 001');
    const [cpf, setCpf] = useState('123456789');

    async function btnPostFunctionClick(event) {
        event.preventDefault();

        await postFunction(nome, email, endereco, cpf)
    }

    return (
        <>
        {/* <Container style={{ width: 660}}> */}
        <Container>
            <Form noValidate onSubmit={btnPostFunctionClick}>
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
                            minLength="11"
                            maxLength="11"
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </InputGroup>
                    <Button type="submit">Criar cadastro</Button>
                </Form>
            </Container>
        </>
    );
}

export default ClientForm;


