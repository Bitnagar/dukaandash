export default function Header() {
  return (
    <header className="min-w-max h-fit flex items-center justify-between bg-white px-8 py-3 border-b-[1px] border-b-black-85">
      <div className="flex w-fit gap-4">
        <p className="w-fit text-primary-black-12">Payments</p>
        <span className="w-fit flex items-center gap-1 text-xs text-primary-black-30">
          <img
            tabIndex={0}
            src={"/assets/header/questionmark.svg"}
            className="min-w-[15px] h-[15px] cursor-pointer"
          />
          how it works
        </span>
      </div>
      <div className="flex w-[400px] h-[40px] items-center px-4 py-3 rounded-md bg-primary-black-95 gap-2">
        <img
          src={"/assets/header/search.svg"}
          className="min-w-[15px] h-[15px] cursor-pointer"
        />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="w-full bg-transparent pl-1"
          name="search"
        />
      </div>
      <div className="flex w-fit gap-4">
        <span
          tabIndex={0}
          className="w-fit p-[10px] bg-primary-black-90 rounded-full cursor-pointer"
        >
          <img
            src={"/assets/header/group.svg"}
            className="min-w-[15px] h-[15px]"
          />
        </span>
        <span
          tabIndex={0}
          className="w-fit p-[10px] bg-primary-black-90 rounded-full cursor-pointer"
        >
          <img
            src={"/assets/header/arrowblackdown.svg"}
            className="min-w-[15px] max-w-[15px] h-[15px]"
          />
        </span>
      </div>
    </header>
  );
}
