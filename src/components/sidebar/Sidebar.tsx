import data from "../../utils/utils";

export default function Sidebar() {
  return (
    <aside className="min-w-[224px] min-h-full top-0 left-0 flex flex-col justify-between bg-primary-navbar-background row-span-2 py-4 px-2">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full flex items-center">
          <div className="w-full h-full flex gap-3">
            <img
              src={"/assets/sidebar/nishyan.png"}
              alt="nishyan"
              className="w-[40px] h-[46px]"
            />
            <div className="w-full">
              <p className="text-[15px] text-white">Nishyan</p>
              <a
                className="text-[13px] underline text-primary-white-80"
                href="#"
              >
                Visit store
              </a>
            </div>
          </div>
          <img
            src={"/assets/sidebar/arrowdown.svg"}
            className="w-[15px] h-[9px]"
            tabIndex={0}
          />
        </div>
        <div className="w-full">
          {data.map((obj, key) => {
            return (
              <a
                href={"/" + obj.title.toLowerCase()}
                key={key}
                className={
                  `w-full flex px-4 py-2 gap-3 items-center rounded text-primary-white-80 hover:bg-primary-navbar-wallet-icon focus:bg-primary-navbar-wallet-icon_bg` +
                  ` ${
                    obj.title === "Payments"
                      ? "bg-primary-navbar-wallet-icon text-white"
                      : ""
                  }`
                }
              >
                <img
                  src={obj.url}
                  className="w-[20px] h-[20px]"
                />
                <p>{obj.title}</p>
              </a>
            );
          })}
        </div>
      </div>
      <AvailableCredits />
    </aside>
  );
}

function AvailableCredits() {
  return (
    <div className="w-full h-14 p-[6px_12px_6px_12px] bg-primary-navbar-wallet rounded">
      <div className="w-full h-full flex items-center gap-3">
        <div className="w-fit p-[6px] bg-primary-navbar-wallet-icon h-fit rounded">
          <img
            src={"/assets/sidebar/wallet.svg"}
            alt="nishyan"
            className="w-[23.6px] h-[19.6px]"
          />
        </div>
        <div className="w-fit h-fit">
          <p className="w-fit text-primary-white-80">Available credits</p>
          <h1 className="text-white">222.10</h1>
        </div>
      </div>
    </div>
  );
}
