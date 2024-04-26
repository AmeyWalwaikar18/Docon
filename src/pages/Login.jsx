import loginImg from '../assets/Doc1.jpeg';
import Template from "../components/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Prescribe with confidence, every time."
      description2="Seamless prescribing, seamless care."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login