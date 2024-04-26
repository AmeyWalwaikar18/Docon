import React from "react";
import plus from "../assets/plus.svg";
import "../App.css";
import Footer from "../components/Footer";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const Security = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        {/* 1st div */}
        <div className="mx-auto flex flex-col items-center mt-[100px]">
          <h2 className="text-[50px] font-medium w-[70%]">
            Docon Vulnerability Disclosure Policy
          </h2>
          <img className="mt-[60px]" src={plus} alt="plus-logo" />
        </div>

        {/* 2nd div */}
        <div className="mt-[100px] ">
          <h2 className="text-left text-[35px] font-medium">
            Table of Contents
          </h2>
          <ul className="text-blue-500 list-disc text-left pl-[35px] mt-[30px] custom-list space-y-2 text-[22px] font-medium">
            <li
              onClick={() => scrollToSection("introduction")}
              className="cursor-pointer"
            >
              Introduction
            </li>
            <li
              onClick={() => scrollToSection("authorization")}
              className="cursor-pointer"
            >
              Authorization
            </li>
            <li
              onClick={() => scrollToSection("terms")}
              className="cursor-pointer"
            >
              Terms
            </li>
            <li
              onClick={() => scrollToSection("reporting")}
              className="cursor-pointer"
            >
              Reporting an issue
            </li>
            <li
              onClick={() => scrollToSection("recognition")}
              className="cursor-pointer"
            >
              Recognition
            </li>
            <li
              onClick={() => scrollToSection("eligibility")}
              className="cursor-pointer"
            >
              Eligibility for Hall of Fame
            </li>
          </ul>
        </div>

        {/* 3rd div */}
        <div className="mt-[100px] w-full mx-auto">
          <h2
            id="introduction"
            className="text-[40px] text-left mb-[45px] font-medium"
          >
            Introduction:
          </h2>
          <p className="text-[20px] w-[95%] text-slate-700 text-left">
            Docon delivers digital healthcare for everyone by providing access
            to appointments, prescription and tele consultation with doctors.
            Doctors leverage our best in class practice management app to ease
            practice, patient & prescription management. Docon is committed to
            maintaining the security and integrity of our products. We value the
            privacy of our customers, doctors and partners and understand the
            importance of critical Healthcare data. We strive to safeguard our
            websites, mobile applications as well as internal systems and
            welcome vulnerability reports that can help further enhance the
            security, integrity and privacy of our systems. We take each and
            every vulnerability disclosure seriously and are committed to
            creating a safe & transparent environment to report vulnerabilities.
          </p>
        </div>

        {/* 4th div */}
        <div className="mt-[100px] w-full mx-auto">
          <h2
            id="authorization"
            className="text-[40px] text-left mb-[45px] font-medium"
          >
            Authorization:
          </h2>
          <p className="text-[20px] w-[95%] text-slate-700 text-left">
            If you make a good faith effort to comply with this policy during
            your security research, we will consider your research to be
            authorized. We will work with you to understand and resolve the
            issue quickly, and Docon will not initiate or recommend legal action
            related to your research.
          </p>
        </div>

        {/* 5th div */}
        <div className="mt-[100px] w-full mx-auto">
          <h2
            id="terms"
            className="text-[40px] text-left mb-[45px] font-medium"
          >
            Terms:
          </h2>
          <ul className="text-[20px] w-[95%] custom-list text-slate-700 text-left">
            <li>
              Reporters submitting a Vulnerability to Docon agree to be bound by
              the terms of this policy.
            </li>
            <li>
              We explicitly specify what is in scope and out of scope when
              discovering vulnerabilities and clearly mention the same in the
              sections below.
            </li>
            <li>
              Reporters should make every effort to avoid privacy violations,
              degradation of user experience, disruption to production systems,
              and destruction or manipulation of data.
            </li>
            <li>
              Reporters should only use/exploit to the extent necessary to
              confirm a vulnerability.
            </li>
            <li>
              Reporters should not use or exploit to compromise or exfiltrate
              data, establish command line access and/or persistence, or
              use/exploit to “pivot” to other systems.
            </li>
            <li>
              Once a reporter establishes that a vulnerability exists, or
              encounters any sensitive data, the reporter should stop any
              further testing and notify us immediately.
            </li>
            <li>
              Reporters shall keep any information about discovered
              vulnerabilities confidential after submitting the vulnerability
              report.
            </li>
            <li>
              We discourage violation of any applicable laws and breach of any
              agreements in order to discover vulnerabilities.
            </li>
            <li>
              Docon reserves the right to pursue legal action when the terms of
              this policy is violated or when testing is performed outside the
              scope of this policy.
            </li>
            <li>
              Docon may include an NDA and also make updates to this policy from
              time to time.
            </li>
            <li>
              The decision made by our security team regarding validity,
              severity & impact of a vulnerability will be considered final and
              cannot be contested.
            </li>
            <li>
              We may share your vulnerability reports with any affected
              partners, vendors or open source projects.
            </li>
          </ul>
        </div>

        {/* 6th div */}
        <div className="mt-[100px] w-full mx-auto">
          <h2
            id="reporting"
            className="text-[40px] text-left mb-[45px] font-medium"
          >
            Reporting an issue:
          </h2>
          <p className="text-[20px] w-[95%] mb-[70px] text-slate-700 text-left">
            Vulnerabilities discovered on our systems while testing within the
            scope of this policy can be reported by emailing it to
            infosec@docon.co.in Please ensure that the following information is
            available when submitting a vulnerability report.
          </p>
          <ul className="text-[20px] w-[95%] custom-list text-slate-700 text-left">
            <li>
              Description of the location and potential impact of the
              vulnerability. Please include any CVEs (Common Vulnerabilities and
              Exposures) when available.
            </li>
            <li>
              A detailed description of the steps required to reproduce the
              vulnerability. Proof of concept (POC) scripts, screenshots, and
              screen captures are all helpful. Please use extreme care to
              properly label and protect any exploit code.
            </li>
            <li>
              Any technical information and related materials we would need to
              reproduce the issue.
            </li>
            <li>
              If possible please include the contact details (email, mobile
              number) to let our Security team reach out to you for any
              clarifications.
            </li>
          </ul>
          <p className="text-[20px] w-[95%] text-slate-700 text-left mt-[70px]">
            Note that reports that include only crash dumps or other automated
            tool output will not be accepted. Please keep your vulnerability
            reports current by sending us any new information as it becomes
            available. We may share your vulnerability reports with any affected
            partners, vendors or open source projects.
          </p>
        </div>

        {/* 7th div */}
        <div className="mt-[100px] w-full mx-auto">
          <h2
            id="recognition"
            className="text-[40px] text-left mb-[45px] font-medium"
          >
            Recognition:
          </h2>
          <p className="text-[20px] w-[95%] text-slate-700 text-left">
            Docon does not have a bounty/cash reward program for vulnerability
            disclosures, but we express our gratitude for your contribution in
            different ways. For genuine ethical disclosures, we will gladly
            acknowledge your contribution publicly in this section of our
            website. Of course, this will only be done if you want a public
            acknowledgement.
          </p>
        </div>

        {/* 8th div */}
        <div className="mt-[100px] w-full mx-auto">
          <h2
            id="eligibility"
            className="text-[40px] text-left mb-[45px] font-medium"
          >
            Eligibility for Hall of Fame:
          </h2>
          <ul className="text-[20px] w-[95%] custom-list text-slate-700 text-left">
            <li>
              Must be the first person to responsibly disclose the vulnerability
            </li>
            <li>
              Vulnerability discovered must be found when testing within the
              scope of this policy
            </li>
            <li>
              Reported vulnerability significantly impacts security and
              integrity of Docon products or impacts the privacy of customer or
              partner data
            </li>
            <li>
              Vulnerabilities are rated Critical, High, Medium and low, Only
              vulnerabilities rated Critical and High are eligible for the Hall
              of Fame.
            </li>
          </ul>
        </div>

        {/* 9th div */}
        <div className="w-[95%] mx-auto pt-[100px] justify-center gap-10 items-center">
          <div className="text-[45px] font-medium w-[500px] mx-auto">
            Achieve your <span className="text-blue-500">best performance</span>{" "}
            with us
          </div>
          <p className="text-[19px] text-slate-600 w-[70%] mx-auto pt-[30px]">
            Let us know a little about yourself, and we’ll reach out to schedule
            an inside look at how we can partner together to drive your success.
          </p>
        </div>
      </div>
      <div className="w-[40%] mt-[70px] mx-auto">
        <ContactUsForm/>
      </div>
      <div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Security;
