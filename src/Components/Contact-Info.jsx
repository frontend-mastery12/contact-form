import { MdMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div className="xl:w-3/12 text-white">
      <h1 className="text-3xl xl:text-5xl -tracking-tighter">
        Contact Us
      </h1>

      <p className="mt-4 text-[17px] font-light xl:text-gray-200 xl:tracking-wide">
        Have a question, an idea, or just want to say hello? We’d love to hear
        from you. Fill out the form below and our team will get back to you as
        soon as possible.
      </p>

      <p className="flex items-center gap-2 mt-8 text-[19px] font-light">
        <MdMail /> info@subscribe.com
      </p>

      <p className="flex items-center gap-2 mt-2 text-[19px] font-light">
        <IoIosCall /> Support: (+21) 123 456 586
      </p>
    </div>
  );
};

export default ContactInfo;
