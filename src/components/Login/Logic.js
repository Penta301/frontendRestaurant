import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Logic() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassWord, setShowPassword] = useState(true);

  const { logIn } = useAuth();

  const emailRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value.includes("@")) {
      setError("Inserta un email valido");
      return;
    }

    if (!passRef.current.value) {
      setError("Inserta una contraseña valida");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef?.current?.value.trim(), passRef?.current?.value);
      window.location.reload();
    } catch {
      setError("Algo malo ocurrio, revisa tus credenciales");
    }
    setLoading(false);
  };

  return {
    emailRef,
    passRef,
    confirmRef,
    handleSubmit,
    error,
    loading,
    showPassWord,
    setShowPassword,
  };
}

export default Logic;
