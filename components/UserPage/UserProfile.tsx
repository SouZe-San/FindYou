const UserProfile = () => {
  return (
    <div className="header_section flex items-center w-full">
      {/* Img section */}
      <div className="header_img bg-white rounded-full aspect-square sm:w-56 w-36">
        <img src="/assets/tech_icons/deno_fresh_relate.png" alt="IMG" />
      </div>
      <div className="name_section md:pl-12 sm:pl-12 pl-4">
        <div className="header_name">
          {/* Use Name In Big */}
          <h1
            className="md:text-[4rem] sm:text-[3.8rem] text-[2.25rem]"
            style={window.innerWidth <= 400 ? { lineHeight: "2.5rem" } : {}}
          >
            User Name
          </h1>
          {/* under Original name */}
          <h3 style={{ lineHeight: "2px" }}>Original account name</h3>
        </div>
        {/* button for go to github */}
        <div className="header_button mt-4">
          <a href="">
            <button className="gitBtn">Go to Github</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
