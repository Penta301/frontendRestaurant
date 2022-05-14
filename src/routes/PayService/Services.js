import CardService from "../../components/CardService/CardService";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 lg:flex-row lg:w-screen lg:justify-around lg:h-screen">
      <CardService
        img={
          "https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918818/undraw_online_message_re_3m5v_th1cc5_jlh2ls.png"
        }
        title={"Plan 1"}
        features={[
          "Crea hasta 25 mesas",
          "Crea y Personaliza tu carta",
          "Comunicacion en tiempo real",
        ]}
        id={"planOne"}
        price={5000}
        key={"Plan1"}
      ></CardService>
      <CardService
        img={
          "https://res.cloudinary.com/dd1xsnzcm/image/upload/v1641918820/undraw_Operating_system_re_iqsc_kwjlse_szde4y.png"
        }
        title={"Plan 2"}
        features={[
          "Todo lo del plan 1",
          "Cantidad de mesas ilimitada",
          "Administra tu local con nuestra contabilidad",
        ]}
        id={"planTwo"}
        price={10000}
        key={"Plan2"}
      ></CardService>
    </div>
  );
};

export default Services;
