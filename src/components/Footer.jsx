import React from "react";
import useColor from "./../hooks/useColor";
import Tooltip from "@mui/material/Tooltip";
function Footer(props) {
  const { BRAND_COLOR } = useColor();
  return (
    <footer
      className={`text-center text-lg-start text-white bg-${BRAND_COLOR}`}
    >
      <section
        className={`d-flex justify-content-between align-items-center pt-4 px-4`}
      >
        <span>Get connected with me on social networks:</span>

        <div>
          <Tooltip placement="top" title="Facebook" arrow>
            <a href="https://www.facebook.com/jaya.karthik.oo7">
              <i className="fa-brands fa-facebook p-2 fs-4 text-white"></i>
            </a>
          </Tooltip>
          <Tooltip placement="top" title="Twitter" arrow>
            <a href="https://twitter.com/jayakarthik_jk/">
              <i className="fa-brands fa-twitter  p-2 fs-4 text-white"></i>
            </a>
          </Tooltip>
          <Tooltip placement="top" title="Instagram" arrow>
            <a href="https://www.instagram.com/jayakarthik.jk/">
              <i className={`fa-brands fa-instagram p-2 fs-4 text-white`}></i>
            </a>
          </Tooltip>
          <Tooltip placement="top" title="Github" arrow>
            <a href="https://github.com/jayakarthik-jk">
              <i className={`fa-brands fa-github p-2 fs-4 text-white`}></i>
            </a>
          </Tooltip>
          <Tooltip placement="top" title="Linkdin" arrow>
            <a href="https://www.linkedin.com/in/jayakarthik-k-aa8a5922a">
              <i className={`fa-brands fa-linkedin p-2 fs-4 text-white`}></i>
            </a>
          </Tooltip>
          <Tooltip placement="top" title="Gmail" arrow>
            <a href="mailto:jayakarthik7312@gmail.com">
              <i className="fa-solid fa-envelope  p-2 fs-4 text-white"></i>
            </a>
          </Tooltip>
        </div>
      </section>

      <section>
        <div className={`container text-center text-md-start mt-5`}>
          <div className={`row`}>
            <div className={`col-md-3 col-lg-4 col-xl-3 mx-auto`}>
              <h6 className={`text-uppercase fw-bolder`}>Pick Some Pic...</h6>
              <hr
                className={`mt-0 d-inline-block mx-auto`}
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                This is an open source project. You can find the Source Code
                on&nbsp;
                <a
                  href="/"
                  style={{ textDecoration: "underline", color: "#fff" }}
                >
                  Github
                </a>
              </p>
            </div>

            <div className={`col-md-2 col-lg-2 col-xl-2 mx-auto pb-4`}>
              <h6 className={`text-uppercase fw-bolder`}>Projects</h6>
              <hr
                className={`mt-0 d-inline-block mx-auto`}
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="https://deviprakash9908.github.io/YetAnotherOnlineCodeEditor/"
                  className={`link text-white`}
                >
                  Yaoce
                </a>
              </p>
              <p>
                <a
                  href="https://project-ebook.herokuapp.com"
                  className={`link text-white`}
                >
                  {"Project - { eBook }"}
                </a>
              </p>
            </div>

            <div className={`col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0`}>
              <h6 className={`text-uppercase fw-bolder`}>Contacts</h6>
              <hr
                className={`mt-0 d-inline-block mx-auto`}
                style={{
                  width: "60px",
                  backgroundColor: "#fff",
                  height: "2px",
                }}
              />
              <p>
                <i className={`fa-solid fa-home`}></i>&nbsp;Chennai, TamilNadu
              </p>
              <p>
                <i className={`fa-solid fa-envelope`}></i>&nbsp;
                jayakarthik7312@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr
        className={`m-0 mb-1`}
        style={{
          width: "100vw",
          backgroundColor: "#fff",
          height: "1px",
        }}
      />
      <div className="text-center pb-2">@No Copyrights Reserved</div>
    </footer>
  );
}

export default Footer;
