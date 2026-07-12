export const AUTH_STORAGE_KEY = 'maxskills_auth';

export const CREDENTIALS = [
  {
    email: 'student@gmail.com',
    password: 'student123',
    role: 'student',
  },
  {
    email: 'teacher@gmail.com',
    password: 'teacher123',
    role: 'instructor',
  },
];

export function authenticateUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const match = CREDENTIALS.find(
    (user) => user.email === normalizedEmail && user.password === password
  );

  if (!match) {
    return null;
  }

  return {
    email: match.email,
    role: match.role,
  };
}

export function getDashboardPath(role) {
  return role === 'student' ? '/student/dashboard' : '/dashboard';
}
