import ListItem from "./ListItem";

const Accounting = ({ data }) => {
  return (
    <div className="bg-gray-800 flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-5 border-2 border-indigo-600  items-center rounded-2xl p-4">
        <h2 className="text-white font-bold text-2xl">
          Total producido este mes:{" "}
          <span className="text-3xl text-indigo-600">{data.total}$</span>
        </h2>
        <div className="w-full h-full flex flex-col gap-5 lg:flex-row">
          <ListItem arr={data.food} title={"Comida mas consumida"}></ListItem>
          <ListItem arr={data.tables} title={"Mesas mas usadas"}></ListItem>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
