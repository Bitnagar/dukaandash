export default function Header() {
  return (
    <header className="w-full h-full flex items-center justify-between bg-white px-8 py-3">
      <div className="flex w-fit gap-4">
        <p className="w-fit text-[#1A181E]">Payments</p>
        <span className="w-fit flex items-center gap-1 text-[#4D4D4D]">
          <img
            tabIndex={0}
            src={"/assets/header/questionmark.svg"}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          how it works
        </span>
      </div>
      <div className="flex w-[400px] h-[40px] items-center px-4 py-3 rounded-md bg-[#F2F2F2] gap-2">
        <img
          src={"/assets/header/search.svg"}
          className="w-[15px] h-[15px] cursor-pointer"
        />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="w-full bg-transparent pl-1"
        />
      </div>
      <div className="flex w-fit gap-4">
        <span
          tabIndex={0}
          className="w-fit p-[10px] bg-[#E6E6E6] rounded-full cursor-pointer"
        >
          <img
            src={"/assets/header/group.svg"}
            className="w-[15px] h-[15px]"
          />
        </span>
        <span
          tabIndex={0}
          className="w-fit p-[10px] bg-[#E6E6E6] rounded-full cursor-pointer"
        >
          <img
            src={"/assets/header/arrowblackdown.svg"}
            className="w-[15px] h-[15px]"
          />
        </span>
      </div>
    </header>
  );
}
