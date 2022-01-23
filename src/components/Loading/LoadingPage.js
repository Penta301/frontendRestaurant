import "./index.css";

const LoadingPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full text-white p-2 text-center  bg-gray-800">
        <h4>Estamos cargando todo el contenido, espera un momento</h4>
      </div>
      <div className="container-loading">
        <h4 className="absolute text-white font-bold z-50">Cargando...</h4>
        <div className="loading-item"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
