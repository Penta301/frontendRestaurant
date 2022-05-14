import Logic from "./Logic";

function CardService({ img, title, features, id, price }) {
  const { handleService } = Logic();

  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-2xl shadow-item-custom gap-2">
      <div className="flex justify-center items-center w-52 h-52">
        <img src={img} alt="options pay" />
      </div>
      <h1 className="text-xl font-bold tracking-wide">{title}</h1>
      <div className="w-full">
        <h2>Caracteristicas:</h2>
        <ul className="px-5 mt-2">
          {features.map((feature) => (
            <li className="font-bold text-indigo-600">{feature}</li>
          ))}
        </ul>
      </div>
      <h3 className="font-light">Precio: {price}$</h3>
      <button
        className="border-2 border-gray-600 p-2 w-full rounded-md hover:bg-gray-800 hover:text-white transition ease-out duration-300"
        onClick={() => handleService({ title, unit_price: price })}
      >
        Elegir Servicio
      </button>
    </div>
  );
}

export default CardService;
