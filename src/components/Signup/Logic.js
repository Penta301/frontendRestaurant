import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Logic() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const emailRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value.includes("@")) {
      setError("Inssert a valid email");
      return;
    }

    if (passRef.current.value === "") {
      setError("Insert a valid password");
      return;
    }

    if (passRef.current.value !== confirmRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passRef.current.value);
      window.location.reload();
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return { emailRef, passRef, confirmRef, handleSubmit, error, loading };
}

export default Logic;
