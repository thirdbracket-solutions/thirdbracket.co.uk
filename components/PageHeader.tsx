interface PageHeaderProps {
  title: string;
  description: string;
  // backgroundColor?: string;
}

{
  /* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */
}
export default function PageHeader({
  title,
  description,
}: // backgroundColor = "bg-gray-100 dark:bg-gray-900",
PageHeaderProps) {
  return (
    <div
      // className={`lg:py-24 py-16 md:py-20  px-6 text-center ${backgroundColor} bg-[url(/pattern.svg)]` #374151}

      className=" h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#212121_1px,transparent_1px)]  [background-size:16px_16px] lg:py-24 py-16 md:py-20  px-6 text-center"
    >
      <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 text-transparent bg-clip-text  text-center mb-6">
        {title}
      </h1>
      <p className="text-gray-950/60 text-base md:text-lg lg:text-xl dark:text-gray-200/60 font-light  mx-auto">
        {description}
      </p>
    </div>
  );
}
