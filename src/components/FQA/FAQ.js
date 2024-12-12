import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import Ques from "../question/Ques";

function FAQ() {
  const [toggles, setToggles] = useState({
    freeTrial: false,
    changePlan: false,
    cancellationPolicy: false,
    invoiceInfo: false,
    billing: false,
    changeEmail: false,
  });

  const handleToggleBtn = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-full h-auto py-10 gap-5  flex justify-center items-center flex-col">
      <div className="w-[343px] sm:w-4/5 h-auto flex justify-center items-center flex-col">
        <p className="text-[30px] font-[inter] font-semibold text-center text-[#101828]">
          Frequently asked questions
        </p>
        <p className="text-[#475467] text-[18px] font-[inter] font-semibold text-center">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="w-[343px] sm:w-2/5 h-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-between items-center border-b-2 border-b-zinc-50 p-2">
          <p className="font-[inter] font-medium text-[18px] text-[#101828]">
            Is there a free trial available?
          </p>
          <button onClick={() => handleToggleBtn("freeTrial")}>
            {!toggles.freeTrial ? (
              <AddCircleOutlineOutlinedIcon />
            ) : (
              <RemoveCircleOutlineOutlinedIcon />
            )}
          </button>
        </div>
        {toggles.freeTrial && <p className="text-[#475467] font-[inter] font-normal text-[16px]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>}
      </div>
      <div className="w-[343px] sm:w-2/5 h-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-between items-center border-b-2 border-b-zinc-50 p-2">
          <p className="font-[inter] font-medium text-[18px] text-[#101828]">
            Can I change my plan later?
          </p>
          <button onClick={() => handleToggleBtn("changePlan")}>
            {!toggles.changePlan ? (
              <AddCircleOutlineOutlinedIcon />
            ) : (
              <RemoveCircleOutlineOutlinedIcon />
            )}
          </button>
        </div>
        {toggles.changePlan && <p>Answer to the change plan question.</p>}
      </div>
      <div className="w-[343px] sm:w-2/5 h-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-between items-center border-b-2 border-b-zinc-50 p-2">
          <p className="font-[inter] font-medium text-[18px] text-[#101828]">
            What is your cancellation policy?
          </p>
          <button onClick={() => handleToggleBtn("cancellationPolicy")}>
            {!toggles.cancellationPolicy ? (
              <AddCircleOutlineOutlinedIcon />
            ) : (
              <RemoveCircleOutlineOutlinedIcon />
            )}
          </button>
        </div>
        {toggles.cancellationPolicy && <p>Answer to the cancellation policy question.</p>}
      </div>
      <div className="w-[343px] sm:w-2/5 h-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-between items-center border-b-2 border-b-zinc-50 p-2">
          <p className="font-[inter] font-medium text-[18px] text-[#101828]">
            Can other info be added to an invoice?
          </p>
          <button onClick={() => handleToggleBtn("invoiceInfo")}>
            {!toggles.invoiceInfo ? (
              <AddCircleOutlineOutlinedIcon />
            ) : (
              <RemoveCircleOutlineOutlinedIcon />
            )}
          </button>
        </div>
        {toggles.invoiceInfo && <p>Answer to the invoice info question.</p>}
      </div>
      <div className="w-[343px] sm:w-2/5 h-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-between items-center border-b-2 border-b-zinc-50 p-2">
          <p className="font-[inter] font-medium text-[18px] text-[#101828]">
            How does billing work?
          </p>
          <button onClick={() => handleToggleBtn("billing")}>
            {!toggles.billing ? (
              <AddCircleOutlineOutlinedIcon />
            ) : (
              <RemoveCircleOutlineOutlinedIcon />
            )}
          </button>
        </div>
        {toggles.billing && <p>Answer to the billing question.</p>}
      </div>
      <div className="w-[343px] sm:w-2/5 h-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-between items-center border-b-2 border-b-zinc-50 p-2">
          <p className="font-[inter] font-medium text-[18px] text-[#101828]">
            How do I change my account email?
          </p>
          <button onClick={() => handleToggleBtn("changeEmail")}>
            {!toggles.changeEmail ? (
              <AddCircleOutlineOutlinedIcon />
            ) : (
              <RemoveCircleOutlineOutlinedIcon />
            )}
          </button>
        </div>
        {toggles.changeEmail && <p>Answer to the change email question.</p>}
      </div>
      <Ques />
    </div>
  );
}

export default FAQ;