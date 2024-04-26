import React, { useEffect } from "react";
import { getPrescritpion } from "../../services/operations/prescriptionAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const History = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const id = user._id;
  console.log("User id", id);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    dispatch(getPrescritpion(id));
    navigate(`/dashboard/history/${user._id}`);
  }, [dispatch, id]);

  const { prescriptions } = useSelector((state) => state.prescriptions);

  console.log("Prescriptions:", prescriptions.data.prescriptions);

  const allPrescriptions = prescriptions.data.prescriptions;

  return (
    <div>
      <div className="space-y-4">
        {allPrescriptions.map((prescription, key) => {
          return (
            <div className="border-2 border-black px-3 py-3 space-y-2 rounded-md bg-slate-800 text-slate-300">
              <h1 className="text-[21px] font-medium">
                Prescription from Doctor {prescription.firstName}{" "}
                {prescription.lastName}
              </h1>
              <div className="text-[18px] mb-[40px]">Date : {prescription.date}</div>
              <div className="flex w-[100%] pt-[25px] text-[17px]">
                <div className="w-[50%] ml-10 text-left ">
                  <div className="font-medium">Disease:</div>
                  <div>{prescription.disease}</div>
                </div>

                <div className="w-[50%] text-left">
                  <div className="font-medium">Symptoms:</div>
                  <div>{prescription.symptoms}</div>
                </div>
              </div>

              <div className="text-left ml-10 pt-[25px] pb-[20px] text-[17px]">
                <div className="font-medium">Medicines:</div>
                <div>{prescription.medicines}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
