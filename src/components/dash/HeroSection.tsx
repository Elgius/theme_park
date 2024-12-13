// import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1697797738602-4f9ff59c7ac4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Theme Park"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Admin Board</h1>
        <p className="text-xl mb-6">Manage your customers and park from here</p>
      </div>
    </div>
  );
}
