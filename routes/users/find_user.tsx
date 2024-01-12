import InputBlock from "../../islands/InputBlock/InputBlock.tsx";

export default function find_user() {
  return (
    <div className=" md:px-12 p-4">
      <div className="header">
        <h1>
          I will Find You ☠️
        </h1>
      </div>

      <section className="input_field mt-4 flex flex-col  w-full">
        <InputBlock />
      </section>
    </div>
  );
}
