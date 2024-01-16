import UserProfile from "../../components/UserPage/UserProfile.tsx";
import UserDetails from "../../components/UserPage/UserDetails.tsx";
// import { apiData } from "../../utils/apiData.js";
import { useEffect, useState } from "preact/hooks";
import { DetailsProps } from "../../utils/interfaceCol.ts";
import { ApiData } from "../../utils/interfaceCol.ts";
import { killer_userName } from "../../utils/LogButton.ts";
const User = ({ userName }: { userName: string }) => {
  const fetchData = async (): Promise<ApiData> => {
    const res = await fetch("/api/user/search", {
      method: "POST",
      body: JSON.stringify({ userName: userName }),
    });
    return await res.json();
  };

  const eventCount = async (URL: string): Promise<number> => {
    const res = await fetch("/api/user/eventdetails", {
      method: "POST",
      body: JSON.stringify({ eventUrl: URL }),
    });
    const data = await res.json();
    return data.length;
  };

  const [Details, setDetails] = useState<DetailsProps | null>(null);
  useEffect(() => {
    // fetch Data of user
    const onRender = async () => {
      try {
        const apiData = await fetchData();
        const eventNumber = await eventCount(apiData.events_url);
        const userDetails = {
          html_url: apiData.html_url,
          avatar_url: apiData.avatar_url,
          login: apiData.login,
          name: apiData.name,
          bio: apiData.bio,
          followers: apiData.followers,
          following: apiData.following,
          public_repos: apiData.public_repos,
          eventsNumber: eventNumber,
          email: apiData.email,
          twitter_username: apiData.twitter_username,
          company: apiData.company,
          location: apiData.location,
          created_at: apiData.created_at,
          updated_at: apiData.updated_at,
        };
        setDetails(userDetails);
      } catch (error) {
        setDetails(null);
      }
    };
    onRender();
  }, [killer_userName.value]);

  if (!Details) {
    return (
      <div className="md:px-12 p-4">
        <div className="user_section mt-4">
          <h1 className="text-2xl text-center">User Loading ...</h1>
        </div>
      </div>
    );
  }
  return (
    <div
      className="sm:p-4 flex flex-col justify-center"
      style={window.innerWidth >= 930 ? { padding: "2rem 3rem" } : {}}
    >
      {/* //*first Row */}
      <UserProfile
        avatar_url={Details.avatar_url}
        html_url={Details.html_url}
        user_name={Details.login}
        name={Details.name}
      />

      {/* //*Second Row */}
      <UserDetails userDetails={Details} />
    </div>
  );
};

export default User;
