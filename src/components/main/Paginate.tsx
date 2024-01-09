export default function Pagination() {
  const data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  return (
    <div className="w-full my-7 flex justify-center">
      <div className="flex  items-center gap-9">
        <button className="flex items-center justify-center gap-3 px-3 py-2 border border-black-85 rounded">
          <img
            src={"/assets/main/previous.svg"}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <span>Previous</span>
        </button>
        <div className="flex justify-around gap-2">
          <span
            tabIndex={0}
            className="px-[6px] py-1 font-normal hover:bg-primary-blue cursor-pointer  hover:text-white rounded"
          >
            1
          </span>
          <span>...</span>
          {data.map((number, key) => {
            return (
              <span
                key={key}
                tabIndex={0}
                className={
                  `px-[6px] py-1 rounded cursor-pointer hover:bg-primary-blue hover:text-white` +
                  ` ${
                    number === 10
                      ? `bg-primary-blue text-white font-medium`
                      : ""
                  }`
                }
              >
                {number}
              </span>
            );
          })}
        </div>
        <button className="flex items-center justify-center gap-3 px-3 py-2 border border-black-85 rounded">
          <span>Next</span>
          <img
            src={"/assets/main/next.svg"}
            className="w-[15px] h-[15px] cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
