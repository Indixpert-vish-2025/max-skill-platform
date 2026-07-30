'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signUpSchema } from '../../lib/validation/signupSchema';
import { registerUser } from '../../lib/auth/credentials';


export default function SignUpForm() {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data) => {
  const result = registerUser({
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
  });

  if (!result.success) {
    toast.error(result.message);
    return;
  }

  toast.success('Account created successfully');

  router.push('/signin');
};


  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <h1>Create Account</h1>
        <p>Create your MaxSkills account.</p>
      </div>

      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            isInvalid={!!errors.name}
            {...register('name')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            isInvalid={!!errors.email}
            {...register('email')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select
            isInvalid={!!errors.role}
            {...register('role')}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {errors.role?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            isInvalid={!!errors.password}
            {...register('password')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            isInvalid={!!errors.confirmPassword}
            {...register('confirmPassword')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="auth-submit-btn w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Account'}
        </Button>
        <div className="text-center mt-3">
  <span className="text-muted">Already have an account? </span>
  <Link href="/signin" className="text-primary text-decoration-none fw-semibold">
    Sign In
  </Link>
</div>
      </Form>


    </div>
  );
}