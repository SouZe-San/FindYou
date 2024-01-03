interface techProps {
  img: string;
  desc: string;
}

const Tech_node = ({ img, desc }: techProps) => {
  return (
    <div className=" grid tech_item mb-6 cursor-pointer">
      <div className="img_sec w-[5rem]">
        <img src={img} alt="Deno" />
      </div>
      <div className="details">
        {desc}
      </div>
    </div>
  );
};

export default Tech_node;
