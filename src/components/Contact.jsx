import ContactForm from "../assets/components/ContactForm";
import ContactInfo from "../assets/components/ContactInfo";
import SectionTitle from "../assets/components/SectionTitle";

const ContactContainer = () => {
  return (
    <>
      <span
        style={{
          marginTop: "-100px",
          paddingBottom: "100px",
          display: "block",
        }}
        id="contact"
      >
        &nbsp;
      </span>
      <section className="contact-section pb-10">
        <div className="container">
          <div className="row mb-n7">
            <div className="col-xl-6 col-lg-6 mb-7">
              <div className="contact-title-section">
                <SectionTitle
                  classOption="title-section"
                  subTitle="CONTACT US"
                  title="Get <span class='text-primary'>in</span> touch"
                  excerptClassOption="mb-5"
                />
                <p>
                  Top rated construction packages we pleasure rationally
                  encounter
                  <br className="d-none d-xl-block" />
                  consequences interesting who loves or pursue or desires
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="col-xl-5 col-lg-6 mb-7 offset-xl-1">
              <div className="contact-address text-center">
                <ContactInfo
                  classOption="address-list mb-4 mb-xl-10 pb-2"
                  title="Office Addres"
                  info="Unscrap Media, SS3-99, Sector 2, Vashi, Navi Mumbai, Maharashtra 400703"
                />
                <ContactInfo
                  classOption="address-list mb-4 mb-xl-10 pb-2"
                  title="Phone Number"
                  info="+91 88989 67521 <br /> +91 90292 39848 <br /> +91 74003 80622"
                />
                <ContactInfo
                  classOption="address-list"
                  title="Web Address"
                  info="unscrapmedia@gmail.com <br /> unscrapmedia.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContainer;
