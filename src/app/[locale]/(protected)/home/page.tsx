import Tools from "@/features/home/Tools";

function page() {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Explore the power of Zacky
        </h2>
        <p className="text-muted-foreground text-center text-sm font-light md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
        <Tools />
      </div>
    </div>
  );
}
export default page;
