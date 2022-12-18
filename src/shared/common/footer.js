import React from "react";

const Footer = () => {
  return (
    <footer className="footer-1 bg-primary text-white py-8 px-20 sm:py-12 mt-10">
      
      <div className="container max-w-xl flex flex-wrap items-center justify-between mx-auto">
        {[
                  ["SEO LINK 1", "/dashboard"],
                  ["SEO LINK 2", "/team"],
                  ["SEO LINK 3", "/projects"],
                  ["SEO LINK 4", "/reports"]
                ].map(([title, url], index) => (
                  <a
                    href={url}
                    key={index}
                    className="rounded-lg px-3 py-2"
                  >
                    <span className="inline-block align-middle px-2 text-slate-50 font-medium hover:text-slate-100 hover:text-slate-400">
                      {title}
                    </span>
                  </a>
                ))}
      </div>
      <div className="container max-w-3xl flex flex-wrap items-center justify-between mx-auto">
        {[
                  ["Terms & Conditions", "/dashboard"],
                  ["Privacy Policy", "/team"],
                  ["Cookies", "/projects"],
                  ["FAQs", "/reports"],
                  ["Responsible Gaming", "/reports"]
                ].map(([title, url], index) => (
                  <a
                    href={url}
                    key={index}
                    className="opacity-50 rounded-lg px-3 py-2 text-gray-100 font-medium hover:text-gray-500 hover:text-gray-500"
                  >
                    <span className="inline-block align-middle px-2">
                      {title}
                    </span>
                  </a>
                ))}
      </div>
      <img src="./images/palasino.png" width={"200px"} height={"70px"} className="my-5 mx-auto" />
      <h6 className="my-10 font-bold">PLAY RESPONSIBILY</h6>
      <h6 className="my-10 font-bold">PAYMENT OPTIONS</h6>
      <small>
        Lorum ipsum dollar sit amet dummy text for the web page, lorum ipsum
        dollar sit amet ipsum. Lorum ipsum dollar sit amet dummy text for the
        web page, lorum ipsum dollar sit amet ipsum.Lorum ipsum dollar sit amet
        dummy text for the web page, lorum ipsum dollar sit amet ipsum.Lorum
        ipsum dollar sit amet dummy text for the web page, lorum ipsum dollar
        sit amet ipsum.Lorum ipsum dollar sit amet dummy text for the web page,
        lorum ipsum dollar sit amet ipsum.Lorum ipsum dollar sit amet dummy text
        for the web page, lorum ipsum dollar sit amet ipsum.Lorum ipsum dollar
        sit amet dummy text for the web page, lorum ipsum dollar sit amet
        ipsum.Lorum ipsum dollar sit amet dummy text for the web page, lorum
        ipsum dollar sit amet ipsum.Lorum ipsum dollar sit amet dummy text for
        the web page, lorum ipsum dollar sit amet ipsum.Lorum ipsum dollar sit
        amet dummy text for the web page, lorum ipsum dollar sit amet
        ipsum.Lorum ipsum dollar sit amet dummy text for the web page, lorum
        ipsum dollar sit amet ipsum.
      </small>
    </footer>
  );
};

export default Footer;
