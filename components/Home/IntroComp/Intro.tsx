import Tech_node from "../Tech_box/Tech_node.tsx";

const Intro = () => {
  const useTechs = [
    {
      name: "Deno",
      img: "/assets/tech_icons/Deno.png",
      desc:
        "Secure JavaScript/TypeScript runtime by Node.js creator Ryan Dahl, prioritizing security and modern features with built-in TypeScript support, a secure runtime environment, and a package manager.",
    },
    {
      name: "Preact",
      img: "/assets/tech_icons/Preact.png",
      desc:
        "Fast 3kB alternative to React with the same modern API. Components & Virtual DOM.Preact is a fast and lightweight JavaScript library for building user interfaces. It is similar to React but with a smaller footprint, making it suitable for performance-critical applications. Preact provides a virtual DOM and component-based architecture, allowing developers to create dynamic and efficient web applications with a familiar API.",
    },
    {
      name: "Fresh",
      img: "/assets/tech_icons/Fresh.png",
      desc:
        "Fresh is a full stack modern web framework for JavaScript and TypeScript developers, designed to make it trivial to create high-quality, performant, and personalized web applications.",
    },
    {
      name: "Tailwind",
      img: "/assets/tech_icons/Tailwind.png",
      desc:
        "Utility-first CSS framework that allows for rapid development by providing pre-defined classes to style elements, promoting a flexible and responsive design approach.",
    },
    {
      name: "TypeScript",
      img: "/assets/tech_icons/TypeScript.png",
      desc:
        "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
    },
  ];

  return (
    <div class="p-8 flex flex-col  items-center relative">
      <div className="text-5xl head_container sm:mt-8">
        <h1 className="Intro_head bg_header ">
          What Am I?{" "}
          <span className=" ml-12 bg_header_ExtraLine">What Am I For?</span>
        </h1>
        <h1 className="Intro_head main_header">What Am I? 🥸 What Am I For?</h1>
      </div>

      <div className="bg_img_section absolute flex justify-between w-full">
        <img
          className="relative -z-10 img_eye"
          src="/assets/bg_Right_redeye.png"
          alt="FUCKING RED eyes"
        />
        <img
          className="relative -z-10 img_eye"
          src="/assets/bg_Left_redeye.png"
          alt="FUCKING RED eyes"
        />
      </div>

      <h3 className="w-full  description">
        <p>
          <span className="px-4"></span>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime, eveniet ullam! Nesciunt tempore, distinctio
          praesentium natus assumenda recusandae porro unde illum atque,
          molestias maiores excepturi doloribus doloremque quae, beatae at ?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
          assumenda sequi est nemo voluptates, voluptas reiciendis perferendis
          voluptatem tenetur ducimus explicabo,
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          deleniti optio debitis voluptatum quasi voluptatem vitae vel nobis?
        </p>
        <br />
        <p>
          <span className="mx-4"></span>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Officiis, nobis dolorem repudiandae, in distinctio
          amet quisquam at beatae numquam voluptatum accusantium consectetur
          natus cupiditate reiciendis reprehenderit dolor, voluptatem fuga.
          Autem cum totam voluptatem soluta fugiat, a dolorem perferendis ea,
          nemo dolorum odio quibusdam eaque nisi nostrum magnam repellat amet
          minus.
        </p>
      </h3>

      <a href="/login" className="btn_a">
        <button class="border goBtn">Get Started</button>
      </a>

      <section className="self-start">
        <div class="Intro_tech">
          <ul>
            <li>What Tech Use for?{"  "}🎮</li>
          </ul>
        </div>

        <h3 className="Tech_desc description">
          Hello I am Souze and I am a Full Stack Developer , who design and
          create this website for you to use and enjoy.

          <div className="TechBox mt-12">
            {/* <Tech_node /> */}

            {useTechs.map((tech) => (
              <Tech_node key={tech.name} img={tech.img} desc={tech.desc} />
            ))}
          </div>
        </h3>
      </section>
    </div>
  );
};

export default Intro;
