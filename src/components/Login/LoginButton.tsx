import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("microsoft")}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg flex items-center gap-3"
    >
      <img src="/microsoft-logo.png" alt="Microsoft Logo" className="h-5" />
      Login with Microsoft
    </button>
  );
};

export default LoginButton;
