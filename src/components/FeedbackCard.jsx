import { quote } from "../assets";

const FeedbackCard = ({content,name,from}) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quote} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-5">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <h4 className="font-poppins font-normal text-[12px] leading-[20px] text-white ml-4">
          {from}
        </h4>
      </div>
    </div>
  </div>
);

export default FeedbackCard;