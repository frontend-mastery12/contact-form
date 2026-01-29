import ContactInfo from "./Contact-Info";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <section className="w-11/12 mx-auto mt-15 xl:flex xl:items-center xl:justify-between xl:mt-10 xl:w-9/12">
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default ContactContainer;
