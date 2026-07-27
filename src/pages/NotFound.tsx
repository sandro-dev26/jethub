interface NotFoundProps {
  type: string;
  isPage?: boolean;
}

function NotFound({ type, isPage }: NotFoundProps) {
  return (
    <main className="flex flex-col justify-center items-center m-4 mt-12 mb-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-sky-500 font-bold">
        {type} not found
      </h1>
      <img
        src="/notfoundicon.svg"
        alt="notfound-icon"
        className="w-[70%] md:w-[50%] lg:w-[20%] invert-100 dark:invert-0"
      />
      <p className="w-[80%] text-sky-500 text-center">
        {isPage
          ? `This ${type.toLowerCase()} does not exist. `
          : `This ${type.toLowerCase()} either does not exist or we don't have its data
        avalable at the moment. `}
        If you didn't accidentally come here, if you know how to write json and
        wish to help us, check out our{" "}
        <a
          href="https://github.com/sandro-dev26/jethub"
          className="hover:underline underline-offset-2 font-semibold"
        >
          GitHub Repository.
        </a>
      </p>
    </main>
  );
}

export default NotFound;
