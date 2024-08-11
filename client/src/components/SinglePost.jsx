export const SinglePost = () => {
  return (
    <div className="w-full flex flex-col md:flex-row mt-8 md:space-x-4">
      {/* left */}
      <div className="w-full md:w-[35%] h-[250px] md:h-[400px] flex rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1699943248190-c8eeb20f1718?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full object-cover"
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-full md:w-[65%] lg:justify-evenly space-y-4">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          Street Photography
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-800 items-center justify-between">
          <p>@Luke Miller</p>
          <div className="flex md:space-x-2 space-x-1">
            <p> November 14, 2023</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          This stunning photograph captures the tranquil beauty of a sunrise
          over a serene landscape. The scene features a picturesque horizon with
          soft, pastel-colored skies transitioning from night to day. A gentle
          mist hovers over a calm lake, reflecting the early morning light and
          adding a dreamy quality to the image. The surrounding mountains and
          lush greenery provide a natural frame, enhancing the peaceful
          ambiance. Perfect for evoking feelings of calm and serenity, this
          image is ideal for use in nature-themed projects, wellness materials,
          or any setting where a sense of tranquility is desired.
        </p>
      </div>
    </div>
  );
};
