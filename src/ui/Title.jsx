function Title({ children }) {
  return (
    <h2 className=" w-full h-40 bg-bg1 flex items-center justify-center font-DanaBold font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
      {children}
    </h2>
  );
}

export default Title;
