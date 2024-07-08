import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Profile</h1>
      <h2>
        <Link href="/settings">Back to the Settings</Link>
      </h2>
    </>
  );
}
