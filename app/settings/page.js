import Link, { useClient } from "next/link";

export default function Page() {
  
  return (
    <>
      <h1>Welcome to Settings Page</h1>

      <h2>
        <Link href="/home"> Home</Link>
      </h2>
      <h2>
        <Link href="/settings/profile"> Profile</Link>
      </h2>
      <h2>
        <Link href="/settings/password"> Password</Link>
      </h2>
    </>
  );
}
