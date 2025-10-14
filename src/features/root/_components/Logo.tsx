import Image from "next/image";

function Logo() {
  return (
    <div className="relative mr-2 h-24 w-24">
      <Image fill src="/logo.png" alt="logo" />
    </div>
  );
}
export default Logo;
