import { Button } from "../../commons";
import TopMenu from "../TopMenu";

const backgroundImageUrl = import.meta.env.VITE_URL+'/media/svg/Line-3.svg';

const Header = () => {
  return (
    <div className="mx-auto md:mb-10 mt-2 flex flex-col">
      <TopMenu />
      <div 
        className="flex flex-row justify-between mt-28 md:mt-20 xs:mt-14 md:flex-col bg-cover bg-center bg-no-repeat w-full items-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')`, height: '1000px'}}
      >
        <div className="flex-1 flex flex-col">
          <span className="text-white font-bold text-4xl ">
            The all-in-one solution on Shibarium L2 for
          </span>
          <span className="text-primary font-bold text-4xl mt-4">
            Liquidity Checks & Locks. |
          </span>
          <p className="text-[#FFFFFF88] mt-4 text-xl ">
            <b className="font-bold">0xShibarium</b> offers a comprehensive
            range of dApps, tools, and bots for users and developers on
            Shibarium blockchain. 100% of revenue goes back to our token
            holders.
          </p>
          <span className="text-white mt-6 mb-6 break-all">
            Contract Address: 0x456815812b3129a4389ea4d73e9706697cc91373
          </span>
          <div className="flex flex-row gap-8">
          <a href={import.meta.env.VITE_TWITTER_ADDRESS} target="_blank" rel="noopener noreferrer">
            <Button title="Twitter" type="primary" />
          </a>
            <Button title="Chart" type="border" />
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-end">
          <img
            className="w-full object-contain max-w-xl"
            src="/media/img/Group-427319668.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
