import BottomMenu from "../BottomMenu";

const backgroundImageUrl = import.meta.env.VITE_URL+'/media/img/Group-26.png';

const Footer = () => {
  return (
    <div className="flex flex-col mb-10 w-full">
      <div className="flex flex-col justify-center items-center mb-10 font-bold text-4xl leading-relaxed"
        style={{ backgroundImage: `url('${backgroundImageUrl}')`, minHeight: '300px' }}
      >
        <span className="text-center">100% of profits go to our holders</span>
        <span className="text-primary">Invest in $0xS</span>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Footer;
