import { useState } from "react";

interface SignupFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
  });

  // state to display after submission
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a login process (e.g., sending to backend)
    console.log('Login data submitted:', formData);

    // Set message to display after successful login: "Login successful!"
    setSubmissionMessage("Login successful!");
  };

  return (
    <div>
      {/* Conditional rendering: form/message */}
      {submissionMessage ? (
        <h2>{submissionMessage}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}

            //Placeholder added
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            //Placeholder added
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
}

export default Login;