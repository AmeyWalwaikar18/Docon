import signupImg from '../assets/Doc1.jpeg';
import Template from "../components/Template"

function Signup() {
  return (
    <Template
      title="Experience the future of healthcare with our e-prescription platform."
      description1="Cure your prescription headaches with ease."
      description2="Simplify prescriptions, elevate care."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup