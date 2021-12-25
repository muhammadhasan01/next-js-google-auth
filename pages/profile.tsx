import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>loading...</div>;
  if (status === "unauthenticated") return <div>no session</div>;

  return (
    <Layout>
      {session && (
        <>
          <img
            src={session?.user?.image || ""}
            className="avatar"
            alt="avatar"
          />
          <h1>{session?.user?.name}</h1>
        </>
      )}

      <style jsx>{`
        .avatar {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Profile;
