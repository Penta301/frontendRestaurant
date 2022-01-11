import CardService from "../../components/CardService/CardService";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 lg:flex-row lg:w-screen lg:justify-around lg:h-screen">
      <CardService
        img={
          "https://res.cloudinary.com/smartrestaurantapi/image/upload/v1633880232/undraw_time_management_30iu_w1pjnr.png"
        }
        title={"Plan 1"}
        features={[
          "Crea hasta 25 mesas",
          "Crea y Personaliza tu carta",
          "Comunicacion en tiempo real",
        ]}
        id={"planOne"}
        price={3500}
      ></CardService>
      <CardService
        img={
          "https://res.cloudinary.com/smartrestaurantapi/image/upload/v1633880235/undraw_buffer_wq43_pckkkb.png"
        }
        title={"Plan 2"}
        features={[
          "Todo lo del plan 1",
          "Cantidad de mesas ilimitada",
          "Administra tu local con nuestra contabilidad",
        ]}
        id={"planTwo"}
        price={5000}
      ></CardService>
    </div>
  );
};

export default Services;
