import React from "react";
import Doc1 from "../assets/Doc1.jpeg";
import "../App.css";
import plus from "../assets/plus.svg";
import paperwork from "../assets/paperwork.svg";
import notes from "../assets/notes.svg";
import organised from "../assets/organised.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import top from "../assets/top.svg";
import middle from "../assets/middle.svg";
import bottom from "../assets/bottom.svg";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

const Home = () => {
  return (
    <div>
      <div>
        <div className="w-[85%] mx-auto pt-[100px] justify-center items-center">
          <div className="flex w-full gap-10">
            <div className="space-y-4">
              <div className="text-[60px] text-slate-800 text-left w-[70%] font-medium">
                Your one stop <span className="gradient">digital Clinic.</span>
              </div>
              <div className="w-[80%] text-slate-600 text-left text-[22px]">
                Transform your practice with our user-friendly interface to
                provide better patient care.
              </div>
            </div>
            <div>
              <img src={Doc1} alt="doctor-image" width={600} />
            </div>
          </div>

          {/* Manage your medical records easily */}
          <div className="w-[95%] mx-auto pt-[100px] justify-center gap-10 items-center">
            <div className=" justify-center mx-auto text-[45px] text-center w-[450px] font-medium">
              Manage your medical{" "}
              <span className="gradient">records,easily</span>
            </div>
            <img src={plus} alt="plus" className="mx-auto pt-[80px]" />
            <div className="flex justify-between pt-[80px]">
              <div className="w-1/3 flex flex-col items-center">
                <img src={paperwork} alt="paperwork" />
                <h2 className="text-[30px] text-slate-800 font-medium pb-3">
                  No more paperwork
                </h2>
                <p className="text-[18px] text-slate-600">
                  With a tap of a button, you can go through your patient’s
                  records.
                </p>
              </div>
              <div className="w-1/3 flex flex-col items-center">
                <img src={organised} alt="organised" />
                <h2 className="text-[30px] text-slate-800 font-medium pb-3">
                  Stay organised
                </h2>
                <p className="text-[18px] text-slate-600">
                  Maintain a timeline of your patients’ health history at ease.
                </p>
              </div>
              <div className="w-1/3 flex flex-col items-center">
                <img src={notes} alt="notes" />
                <h2 className="text-[30px] text-slate-800 font-medium pb-3">
                  Access notes
                </h2>
                <p className="text-[18px] text-slate-600">
                  Share data with your patients on your terms.
                </p>
              </div>
            </div>
          </div>

          {/* Simpified clinic management */}
          <div className="w-[95%] mx-auto pt-[100px] justify-center gap-10 items-center ">
            <p className="text-center text-[50px] font-medium">
              Simplified{" "}
              <span className="text-blue-500">clinic management</span>
            </p>
            <div className="flex pt-10 justify-between text-[18px] text-slate-600">
              <div className="flex flex-col items-center">
                <img src={image1} alt="image1" width={100} />
                <p>Patient Engagement</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={image2} alt="image2" width={100} />
                <p>E-health Information</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={image3} alt="image3" width={100} />
                <p>Telehealth & Appointment</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={image4} alt="image4" width={100} />
                <p>Medicines and Lab Tests</p>
              </div>
            </div>
          </div>

          {/* your data is in safe hands */}
          <div className="w-[95%] mx-auto pt-[100px] justify-center gap-10 items-center">
            <div className="text-[50px] mx-auto w-[400px] font-medium text-slate-800">
              Your data <br />
              is in <span className="text-blue-600">safe hands</span>
            </div>
            <p className="w-[80%] mx-auto pt-[50px] mb-[100px] text-[20px] text-slate-600">
              Health should never come at the expense of privacy. With Docon,
              you decide what you want to share. We use the latest encryption
              technologies and comply with the NDHM Act 2018.
            </p>
            <Link to="/signup">
              <button className="bg-blue-500 font-medium text-[22px] text-slate-50 px-8 py-3 rounded-lg">
                Start Your Journey
              </button>
            </Link>
            <div className="mx-auto justify-center pt-[100px] text-[45px] font-medium">
              Working with <br />
              <span className="text-blue-500">Docon is simple</span>
            </div>
            <div className="flex justify-between pt-[60px]">
              <div className="flex flex-col items-center">
                <img src={top} alt="image" />
                <div className="text-[25px] font-medium">Add Patients</div>
                <p className="text-[19px] text-slate-600">
                  Enter patient details using the reception module or from the
                  EMR.
                </p>
              </div>
              <div className="mt-[120px]">
                <img src={arrow1} alt="arrow" width={330} />
              </div>
              <div className="flex flex-col items-center mt-[80px]">
                <img src={middle} alt="image" />
                <div className="text-[25px] font-medium">
                  Generate Prescription
                </div>
                <p className="text-[19px] text-slate-600">
                  Consult your patient and generate the prescription within a
                  few seconds.
                </p>
              </div>
              <div className="mt-[240px]">
                <img src={arrow2} alt="arrow" width={330} />
              </div>
              <div className="flex flex-col items-center mt-[180px]">
                <img src={bottom} alt="image" />
                <div className="text-[25px] font-medium">Share Rx</div>
                <p className="text-[19px] text-slate-600">
                  Patients can view the prescription or e-Rx on the web portal
                </p>
              </div>
            </div>
          </div>

          {/* acheive your best performance with us */}
          <div className="w-[95%] mx-auto pt-[100px] justify-center gap-10 items-center">
            <div className="text-[45px] font-medium w-[500px] mx-auto">
              Achieve your{" "}
              <span className="text-blue-500">best performance</span> with us
            </div>
            <p className="text-[19px] text-slate-600 w-[70%] mx-auto pt-[30px]">
              Let us know a little about yourself, and we’ll reach out to
              schedule an inside look at how we can partner together to drive
              your success.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[40%] mx-auto mt-[40px]  border-slate-600 rounded-md px-8 py-6">
        <ContactUsForm/>
      </div>

      <div className="w-full">
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
