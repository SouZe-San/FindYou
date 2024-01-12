import { DetailsProps } from "../../utils/interfaceCol.ts";

interface UserDetailsProps {
  userDetails: DetailsProps;
}

const UserDetails = ({ userDetails }: UserDetailsProps) => {
  return (
    <section className="user_details mt-8 lg:p-8 md:px-6 px-4 flex flex-col gap-4">
      {/* User Bio */}
      <div className="user_bio special_box">
        <h1 className="details_tag">User Bio -</h1>
        <p className="user_bio_text">
          {userDetails.bio}
        </p>
      </div>

      <div className="details_sec_box flex  gap-7">
        <div className="right_view_box order-2 card_design">
          <h1 className="details_tag">Users Activity -</h1>
          {/* Followers and following count */}
          <div className="user_popularity gap-5 ">
            <div className="user_followers details_item special_box">
              <h1 className="user_followers_count">
                <span>Followers</span>: {userDetails.followers}
              </h1>
            </div>
            <div className="user_following details_item special_box">
              <h1 className="user_following_count">
                <span>Following</span>: {userDetails.following}
              </h1>
            </div>
          </div>
          {/* Repository Url and Numbers */}
          <div className="user_repository details_item special_box">
            <div className="user_repository_url">
              <h1 className="user_repository_url_text">
                <span>Repository</span>: {userDetails.public_repos}
              </h1>
            </div>
          </div>

          <div className="user_event details_item">
            <h1 className="user_event_text">
              <span>Recent Event</span>: {userDetails.eventsNumber}
            </h1>
          </div>
        </div>
        {/*Contact details*/}

        <div className="user_contact_details card_design">
          <h1 className="details_tag">Users Contacts -</h1>
          <div className="contact_details special_box">
            <h1 className="user_contact_details_text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  fill="currentColor"
                />
              </svg>
              Email :
            </h1>
            <span>
              {userDetails.email === null ? "No Mail" : userDetails.email}
            </span>
          </div>
          <div className="contact_details special_box">
            <h1 className="user_contact_details_text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"
                  fill="currentColor"
                >
                </path>
              </svg>
              Twitter :
            </h1>
            <span>
              {userDetails.twitter_username === null
                ? "Not Available"
                : userDetails.twitter_username}
            </span>
          </div>
          <div className="contact_details special_box">
            <h1 className="user_contact_details_text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
              >
                <path
                  d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"
                  fill="currentColor"
                />
              </svg>
              Company :
            </h1>
            <span>
              {userDetails.company === null
                ? "Not Available"
                : userDetails.company}
            </span>
          </div>
          <div className="contact_details special_box">
            <h1 className="user_contact_details_text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  d="M21 21H3C2.44772 21 2 20.5523 2 20V12.4868C2 12.1978 2.12501 11.9229 2.34282 11.733L6 8.54435V4C6 3.44772 6.44772 3 7 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM9 19H12V12.9416L8 9.45402L4 12.9416V19H7V15H9V19ZM14 19H20V5H8V7.12729C8.23444 7.12729 8.46888 7.20938 8.65718 7.37355L13.6572 11.733C13.875 11.9229 14 12.1978 14 12.4868V19ZM16 11H18V13H16V11ZM16 15H18V17H16V15ZM16 7H18V9H16V7ZM12 7H14V9H12V7Z"
                  fill="currentColor"
                >
                </path>
              </svg>
              Location :
            </h1>
            <span>
              {userDetails.location === null
                ? "Not Available"
                : userDetails.location}
            </span>
          </div>
          <div className="contact_details special_box">
            <h1 className="user_contact_details_text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
                  fill="currentColor"
                />
              </svg>
              Joined :
            </h1>
            <span className="ml-2">
              {userDetails.updated_at.split("T")[0]}
            </span>
          </div>
          <div className="contact_details ">
            <h1 className="user_contact_details_text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"
                  fill="currentColor"
                >
                </path>
              </svg>
              Last Active :
            </h1>
            <span>
              {userDetails.updated_at.split("T")[0]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
