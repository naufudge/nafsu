'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import DoctorsView from "@/components/DoctorsView";

export default function Home() {
  const [popup, setPopup] = useState(false);
  const [details, setDetails] = useState({
    description: "",
    history: "",
    gender: "",
    insurance: "",
    district: ""
  });
  const [doctors, setDoctors] = useState()
  const [doctorView, setDoctorView] = useState(false)

  useEffect(()=> {
    const getDoctors = async () => {
      const response = await axios.get('/api/doctors')
      localStorage.setItem("doctors", JSON.stringify(response.data.doctors))
      setDoctors(response.data.doctors)
      return response;
    }

    try {
      if (!doctors) getDoctors()
      
    } catch (error) {
      console.log(error.message)
    }
  }, [doctors])


  const handleHelpBtn = () => {
    setPopup(!popup);
    document.getElementById('my_modal').showModal()
    document.getElementById('main-bg').classList.add("blur")
  }

  const handleClose = () => {
    document.getElementById('main-bg').classList.remove("blur")
    setDoctorView(false)
  }

  const districts = [
    "Maafannu",
    "Machangolhi",
    "Henveiru",
    "Galolhu",
    "Hulhumale",
    "Vilimalé"
  ]

  return (
    <div id="main-bg" className="">
      
      <div>
        <div className="main-desc">
          <div>Welcome to Nafsu.</div>
          <div
          className="main-btn"
          onClick={handleHelpBtn}
          >Find Help</div>
        </div>

        {/* Form Component Below */}
        <dialog id="my_modal" className="modal">
        <div className="modal-box bg-gradient-to-l from-[#D3ADBC] to-[#C794BE] text-sm py-6">
            {
              doctorView && <DoctorsView doctors={doctors} />
            }
            <div className="transition-all duration-150">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleClose}
            >✕</button>
            </form>
            <h3 className="font-bold text-lg">Fill the information below!</h3>
            <br />
            <div className="flex flex-col gap-5">
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-[#161010]">How do you feel?</span>
                </div>
                <input
                type="text"
                placeholder="How are you feeling"
                className="form-field"
                onChange={(e) => setDetails({...details, description: e.target.value})}
                />
              </label>

              <label className="form-control placeholder:text-center">
                <div className="label">
                  <span className="label-text text-[#161010]">Previous medical history (If any)</span>
                </div>
                <input
                type="text"
                placeholder="Medical History"
                className="form-field"
                onChange={(e) => setDetails({...details, history: e.target.value})}
                />
              </label>

              <div className="grid grid-cols-3 gap-4">
                <label className="form-control col-span-1">
                  <div className="label">
                    <span className="label-text text-[#161010]">Select Gender</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-primary checked:bg-[#674657]"
                      value={"male"}
                      onClick={(e) => setDetails({...details, gender: e.target.value})}
                      />
                      <div>Male</div>
                    </div>
                    <div className="flex gap-2">
                      <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-primary checked:bg-[#674657]"
                      value={"female"}
                      onClick={(e) => setDetails({...details, gender: e.target.value})}
                      />
                      <div>Female</div>
                    </div>
                    
                  </div>
                </label>
              

                <label className="form-control col-span-2">
                  <div className="label">
                    <span className="label-text text-[#161010]">Would you prefer Government Hospital or Clinic?</span>
                  </div>
                  {/* <input type="text" placeholder="Type here" className="form-field" /> */}
                  <div className="flex flex-row gap-4">
                    <div className="flex gap-2">
                      <input type="radio" name="radio-2" className="radio radio-primary checked:bg-[#674657] outline-none
                       border-[#674657]" />
                      <div className="">Public</div>
                    </div>
                    <div className="flex gap-2">
                      <input type="radio" name="radio-2" className="radio radio-primary checked:bg-[#674657] outline-[#674657]" />
                      <div>Private</div>
                    </div>
                    <div className="flex gap-2">
                      <input type="radio" name="radio-2" className="radio radio-primary checked:bg-[#674657] outline-[#674657]" />
                      <div>Both</div>
                    </div>
                    
                  </div>
                </label>
              </div>

              <label className="form-control">
                <div className="label">
                  <span className="label-text text-[#161010]">Any other insurance other than Aasaandha?</span>
                </div>
                <input
                type="text"
                placeholder="Other Insurances"
                className="form-field"
                onChange={(e) => setDetails({...details, insurance: e.target.value})}
                />
              </label>
              
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-[#161010]">Location in Male</span>
                </div>
                <select
                className="select bg-transparent outline outline-2 outline-[#674657] focus:outline-[#674657] w-full text-[#E4CBDF]"
                onChange={(e) => setDetails({...details, district: e.target.value})}
                defaultValue={"default"}
                >
                  <option value={"default"} disabled>Select a District</option>
                  {
                    districts.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))
                  }
                </select>
              </label>

            </div>
            <div className="text-center">
              <button
              className="main-btn mt-5"
              onClick={() => setDoctorView(true)}
              >Submit</button>
            
            </div>
            </div>
        </div>
        </dialog>

      </div>
    </div>
  );
}
