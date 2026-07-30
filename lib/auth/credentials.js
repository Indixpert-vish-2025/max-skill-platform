export const AUTH_STORAGE_KEY = 'maxskills_auth';
export const USERS_STORAGE_KEY = 'maxskills_users';

const DEFAULT_USERS = [
  {
    name: 'Student',
    email: 'student@gmail.com',
    password: 'student123',
    role: 'student',
  },
  {
    name: 'Teacher',
    email: 'teacher@gmail.com',
    password: 'teacher123',
    role: 'instructor',
  },
];

export function getUsers() {
  if (typeof window === 'undefined') return DEFAULT_USERS;

  const users = localStorage.getItem(USERS_STORAGE_KEY);

  if (!users) {
    localStorage.setItem(
      USERS_STORAGE_KEY,
      JSON.stringify(DEFAULT_USERS)
    );
    return DEFAULT_USERS;
  }

  return JSON.parse(users);
}

export function registerUser(user) {
  const users = getUsers();

  const exists = users.some(
    u => u.email.toLowerCase() === user.email.toLowerCase()
  );

  if (exists) {
    return {
      success: false,
      message: 'Email already exists',
    };
  }

  users.push(user);

  localStorage.setItem(
    USERS_STORAGE_KEY,
    JSON.stringify(users)
  );

  return {
    success: true,
  };
}

export function authenticateUser(email, password) {
  const users = getUsers();

  const user = users.find(
    u =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.password === password
  );

  if (!user) return null;

  return {
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export function getDashboardPath(role) {
  return role === 'student'
    ? '/student/dashboard'
    : '/dashboard';
}