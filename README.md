# commercify-auth

A TypeScript npm package that provides an authentication client for the Commercify backend.

## Installation

```bash
npm install commercify-auth axios
```

## Usage

```ts
import { CommercifyAuth, SignInRequest, SignUpRequest } from "commercify-auth";

const authClient = new CommercifyAuth("http://localhost:6091");

// Sign In
const signInData: SignInRequest = {
  email: "user@example.com",
  password: "securepassword",
};

authClient
  .signIn(signInData)
  .then((response) => console.log("Sign In Response:", response))
  .catch((error) => console.error("Error signing in:", error));

// Sign Up
const signUpData: SignUpRequest = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "securepassword",
  phone: "1234567890",
};

authClient
  .signUp(signUpData)
  .then((response) => console.log("Sign Up Response:", response))
  .catch((error) => console.error("Error signing up:", error));

// Refresh Token
const currentRefreshToken = "your-refresh-token-here";

authClient
  .refresh(currentRefreshToken)
  .then((response) => console.log("Refresh Token Response:", response))
  .catch((error) => console.error("Error refreshing token:", error));
```
