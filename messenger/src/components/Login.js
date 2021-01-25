import {React,useRef} from 'react'
import {Container, Form, Button } from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'
 function Login({ onIdSubmit }) {

    const loginRef=useRef();

    function handleSubmit(e){
        e.preventDefault();
        onIdSubmit(loginRef.current.value);
        
    }

    function handleNewId(e){
        onIdSubmit(uuidV4());
    }
    return (
        <Container className="align-items-center d-flex" style={{height:"100vh"}}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="text" ref={loginRef} style={{width:"50vw"}}></Form.Control>
                    
                </Form.Group>
                <Button variant="primary" type="submit" className="mr-2" onClick={handleSubmit}>Submit</Button>
                <Button variant="secondary" onClick={handleNewId}>Create New ID</Button>
            </Form>
        </Container>
    )
}
export default Login;