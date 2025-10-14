import Image from "next/image";

function Logo() {
  return (
    <div className="relative w-8 h-8 mr-4">
      <Image fill src="/logo.png" alt="logo" className="w-8 h-8"/>
    </div>
  );
}
export default Logo;
