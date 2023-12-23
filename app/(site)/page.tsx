import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
    flex
    min-h-full
    flex-col
    py-12
    sm:px-6
    lg:px-8
    bg-gray-100
    ">
      <div
        className="sm:mx-auto
      sm:w-full
      sm:mx-w-md
      ">
        <Image
          src="/images/logo.png"
          alt="messenger"
          height={48}
          width={48}
          priority
          className="mx-auto w-auto cursor-pointer"
        />
        <h2
          className="
         mt-6
         text-center
         text-3xl
         font-bold
         tracking-tight
         text-gray-900
        ">
          Sign In your Account
        </h2>
      </div>
      {/* auth form */}
      <AuthForm />
    </div>
  );
}
