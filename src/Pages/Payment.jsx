import useHiddenNumbers from "@/Hooks/useHiddenNumbers";
import visaCardLogo from "/public/bxl_visa.png";
import masterCardLogo from "/public/logos_mastercard.png";
import { creditCards } from "@/utils";

function Payment() {
  return (
    <>
      <h1 className="text-[24px] leading-[30.77px] font-bold ml-20 mt-5 mb-5">
        Payment Methods
      </h1>
      <hr className="border-black" />
      <div className="px-2 mt-7 sm:px-24">
        {creditCards.map((creditCard, index) => {
          const cardNumberPrefix = creditCard.cardNumber.toString().slice(0, 1);
          const cardLogo =
            cardNumberPrefix === "4"
              ? visaCardLogo
              : cardNumberPrefix === "5" || cardNumberPrefix === "2"
              ? masterCardLogo
              : null;
          const number = useHiddenNumbers(creditCard.cardNumber, 4);

          return (
            <div
              key={index}
              className="border border-[#000000] max-w-[898px] w-full flex items-center justify-between sm:px-10 px-2 py-5"
            >
              <div className="flex items-center gap-6 sm:gap-9">
                <img src={cardLogo} alt="" />
                <div className="flex flex-col items-start gap-2">
                  <p className="font-bold">{creditCard.name}</p>
                  <p className="text-[#777777]">{number}</p>
                </div>
              </div>
              <div className="items-center hidden gap-10 sm:flex">
                <button className="text-lg text-[#EB001B]">Delete</button>
                <button className="text-lg">Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Payment;
