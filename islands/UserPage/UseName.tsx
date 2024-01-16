import { Logged_userName } from "../../utils/LogButton.ts";

const UseName = () => {
  return <span>{Logged_userName.value}</span>;
};

export default UseName;
