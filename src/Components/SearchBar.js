import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import './SearchBar.css'


function SearchBar({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        onSubmit(searchTerm)
    }
    return (
        <div>
            <Row>
                <Col sm={2} className="yout">
                    <img src="https://qph.fs.quoracdn.net/main-qimg-42c4ff4294f513629285899c5202a38f" height="30px"></img>
                </Col>
                <Col sm={8}>
                    <Form onSubmit={submitHandler}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type='text'
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search"
                            />
                            <Button type='submit' variant="danger" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col sm={2}>
                    <img src="https://yt3.ggpht.com/8NSPmiAseY4MY0QcDHNLqoQ7CiFxmnYYAxrC-ZSIuIt2C4-NBLyIyBS-tDhzow32SMOVszI7IA=s88-c-k-c0x00ffffff-no-rj-mo" className='ico'></img>
                </Col>
            </Row>
        </div>
    );
}

export default SearchBar;
