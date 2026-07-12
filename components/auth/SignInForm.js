'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Form } from 'react-bootstrap';
import { authenticateUser } from '../../lib/auth/credentials';
import { signInSchema } from '../../lib/validation/signinSchema';
import { useAuth } from '../../hooks/useAuth';

export default function SignInForm() {
  const { login } = useAuth();
  const [authError, setAuthError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    setAuthError('');
    const user = authenticateUser(values.email, values.password);

    if (!user) {
      setAuthError('Invalid email or password.');
      return;
    }

    login(user);
  };

  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <h1>Sign In</h1>
        <p>Welcome back to MaxSkills.</p>
      </div>

      {authError && <Alert variant="danger">{authError}</Alert>}

      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="signinEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            isInvalid={Boolean(errors.email)}
            {...register('email')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="signinPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            isInvalid={Boolean(errors.password)}
            {...register('password')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="auth-submit-btn w-100" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </Form>
    </div>
  );
}
