import React, { useState } from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

//INTERNAL IMPORT
import Style from "../styles/contactUs.module.css";
import { Button } from "../components/componentsindex";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload hobe na
    console.log("Form data:", formData);
    // ekhane API call / email service add korte paren
  };

  const socials = [
    { icon: <TiSocialFacebook />, label: "Facebook" },
    { icon: <TiSocialInstagram />, label: "Instagram" },
    { icon: <TiSocialLinkedin />, label: "LinkedIn" },
    { icon: <TiSocialTwitter />, label: "Twitter" },
    { icon: <TiSocialYoutube />, label: "YouTube" },
  ];

  return (
    <div className={Style.contactUs}>
      <div className={Style.contactUs_box}>
        <h1>Contact</h1>

        <div className={Style.contactUs_box_box}>
          {/* ===== LEFT: info ===== */}
          <div className={Style.contactUs_box_box_left}>
            <div className={Style.contactUs_box_box_left_item}>
              <h3>🏡 ADDRESS</h3>
              <p>
                Photo booth tattooed prism, Portland taiyaki hoodie neutra
                typewriter.
              </p>
            </div>

            <div className={Style.contactUs_box_box_left_item}>
              <h3>📧 EMAIL</h3>
              <p>nc.example@example.com</p>
            </div>

            <div className={Style.contactUs_box_box_left_item}>
              <h3>📞 PHONE</h3>
              <p>+8801810370685</p>
            </div>

            <div className={Style.contactUs_box_box_left_item}>
              <h3>🌎 SOCIALS</h3>
              <div className={Style.contactUs_box_box_left_socials}>
                {socials.map((el, i) => (
                  <a
                    href="#"
                    key={i + 1}
                    aria-label={el.label}
                    title={el.label}
                  >
                    {el.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT: form ===== */}
          <div className={Style.contactUs_box_box_right}>
            <form className={Style.Form} onSubmit={handleSubmit}>
              <div className={Style.Form_box_input}>
                <label htmlFor="name">UserName</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Bappy Hasan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Style.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={Style.Form_box_input_box}>
                  <div className={Style.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={Style.Form_box_input}>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  placeholder="Something about yourself in few words"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className={Style.Form_box_btn}>
                <div className={Style.button}>
                  <Button btnName="Send Message" handleClick={() => {}} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
