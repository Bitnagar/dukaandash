import DataGrid from "./DataGrid";

export default function Main() {
  return (
    <section className="min-w-min h-full p-8 bg-primary-black-99 overflow-y-scroll">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] text-primary-black-12 font-medium">
          Overview
        </h2>
        <select
          aria-label="month"
          name="month"
          className="py-[6px] px-1 text-[16px] font-normal bg-white border border-black-85 rounded"
        >
          <option value={"last month"}>Last Month</option>
        </select>
      </div>
      <div className="flex justify-between mt-6 gap-5">
        <div className="w-1/2 flex flex-col gap-4 p-5 bg-white rounded-lg shadow-box_1">
          <div>
            <p className="text-[16px] font-normal text-primary-black-30">
              Online Orders
            </p>
            <p className="text-[32px] text-primary-black-12 font-medium">231</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4 p-5 bg-white rounded-lg shadow-box_1">
          <div>
            <p className="text-[16px] font-normal text-primary-black-30">
              Amount received
            </p>
            <p className="text-[32px] text-primary-black-12 font-medium">
              ₹23,92,312.19
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-[20px] font-medium">Transactions | This Month</h2>
      </div>
      <DataGrid />
    </section>
  );
}
