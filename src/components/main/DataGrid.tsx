import Pagination from "./Paginate";

export default function DataGrid() {
  return (
    <div className="h-fit flex flex-col justify-between items-center p-3 bg-white shadow-box_1 mt-5">
      <div className="flex w-full justify-between items-center">
        <div className="flex w-[248px] h-[40px] items-center px-4 py-3 rounded-md gap-2 border border-black-85">
          <img
            src={"/assets/header/search.svg"}
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search by order ID..."
            className="w-full bg-transparent pl-1"
            name="seachOrder"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-[6px] border border-black-85 px-2 py-1 rounded">
            <span className=" text-base">Sort</span>
            <img
              src={"/assets/main/sort.svg"}
              className="w-[18px] h-[18px]"
            />
          </button>
          <button className="flex items-center justify-center gap-[6px] border border-black-85 px-2 py-1 rounded">
            <img
              src={"/assets/main/download.svg"}
              className="w-[18px] h-[18px]"
            />
          </button>
        </div>
      </div>
      <table className="w-full mt-3">
        <thead>
          <tr className="">
            <th className="text-left">Order ID</th>
            <th className="text-center">
              <select
                name="orderDate"
                className="bg-transparent"
              >
                <option>Order date</option>
                <option>hire me :P</option>
              </select>
            </th>
            <th className="text-right">Order amount</th>
            <th className="flex items-center justify-end gap-1">
              <p>Transaction Fees</p>
              <img
                tabIndex={0}
                src={"/assets/main/i-icon.svg"}
                className="w-[15px] h-[15px] cursor-pointer"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(19)].map((_, k) => {
            return (
              <tr
                className="border-b border-b-black-85"
                key={k}
              >
                <td className="font-semibold text-primary-blue">#281209</td>
                <td className="text-center font-medium">7 July, 2023</td>
                <td className="text-right font-medium">₹1,278.23</td>
                <td className="text-right font-medium">₹22</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
