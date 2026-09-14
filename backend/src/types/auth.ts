export type Course = "qaida" | "hifz" | "kirat";

export type UserRecord = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  course: Course;
  createdAt: string;
};

export type PublicUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  course: Course;
  createdAt: string;
};

export type AuthTokenPayload = {
  sub: string;
  email: string;
};

export type AuthResult = {
  user: PublicUser;
  accessToken: string;
  expiresIn: string;
};
