import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../service/api.js';
import Message from '../../common/Message.js';
import {
  FormContainer,
  Form,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Button,
  HelpText
} from './Login.styles';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const credentials = {
        username: formData.username || 'mor_2314',
        password: formData.password || '83r5^_'
      };

      const response = await login(credentials);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', credentials.username);
        setSuccess(true);
        setIsAuthenticated(true);
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Iniciar Sesión</FormTitle>
        
        {error && <Message type="error">{error}</Message>}
        {success && <Message type="success">¡Login exitoso! Redirigiendo...</Message>}
        
        <FormGroup>
          <Label htmlFor="username">Usuario</Label>
          <Input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Ingresa tu usuario"
            required
            disabled={loading}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
            disabled={loading}
          />
        </FormGroup>
        
        <Button type="submit" disabled={loading}>
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </Button>
        
        <HelpText>
          <p>Usuario demo: <strong>mor_2314</strong></p>
          <p>Contraseña: <strong>83r5^_</strong></p>
        </HelpText>
      </Form>
    </FormContainer>
  );
};

export default Login;