import buildClient from "../api/build-client";

//EXECUTED ON THE CLIENT (REQUEST COMES FROM THE CLIENT WHENEVER IT'S INITIATED FROM COMPONENT)
const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in </h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

//EXECUTED ON THE SERVER (REQUEST COMES FROM THE SERVER ITSELF)
LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};
export default LandingPage;
