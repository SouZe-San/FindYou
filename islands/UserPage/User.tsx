import UserProfile from "../../components/UserPage/UserProfile.tsx";
import UserDetails from "../../components/UserPage/UserDetails.tsx";
const User = () => {
  return (
    <div
      className="sm:p-4 flex flex-col items-center justify-center"
      style={window.innerWidth >= 930 ? { padding: "2rem 3rem" } : {}}
    >
      {/* //*first Row */}
      <UserProfile />

      {/* //*Second Row */}
      <UserDetails />
    </div>
  );
};

export default User;
