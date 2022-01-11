function Logic() {
  const handleFeature = (plan) => {
    switch (plan) {
      case "Plan 1":
        return [
          "Crea hasta 25 mesas",
          "Crea y Personaliza tu carta",
          "Comunicacion en tiempo real",
        ];
      case "Plan 2":
        return [
          "Crea y Personaliza tu carta",
          "Comunicacion en tiempo real",
          "Cantidad de mesas ilimitada",
          "Administra tu local con nuestra contabilidad",
        ];
      default:
        return "";
    }
  };

  return { handleFeature };
}

export default Logic;
