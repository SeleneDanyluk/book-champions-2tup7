import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFound = () => {

    const navigate = useNavigate()

    const handleBackLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <h3>Ups! Página no encontradaaaaaa!!!!</h3>
            <Button onClick={handleBackLogin}>
                Volver al Inicio
            </Button>
        </div>
    )
}

export default NotFound