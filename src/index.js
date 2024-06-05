import React from 'react';
import ReactDOM from 'react-dom/client';
import ClientForm from './pages/clientForm';
import ClientList from './pages/clientList';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle'
import Container from 'react-bootstrap/Container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Container style={{ width: 900, marginTop: 50}}>
        <ClientForm />
        <ClientList />
        </Container>
    </React.StrictMode>
);

