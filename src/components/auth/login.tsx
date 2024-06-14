// import { Input } from "antd"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faJira } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    toast.success("Đăng nhập thành công")
    navigate("/home")
  }
  return (
    <div className="h-[100vh] flex flex-col justify-around ">
      <div className="flex justify-center items-center py-10">
        <div>
          <img className="h-44" src="logo.png" alt="" />
        </div>
      </div>
      <div className="min-h-[40vh] flex-1 login-border ">
        <div className=" flex flex-col mt-4 px-7 gap-5 justify-center">
          <div className="self-center font-bold text-3xl text-blue-500 ">
            Đăng nhập
          </div>
          <div className="flex gap-1 flex-col">
            <span className="text-xl">Tên đăng nhập hoặc email</span>
            <Input />
          </div>
          <div className="flex gap-1 flex-col">
            <span className="text-xl">Mật khẩu </span>
            <Input />
            <div className="self-end">Quên mật khẩu ?</div>

          </div>

        </div>
        <div className="flex justify-center"><Button onClick={handleLogin} className="text-white text-xl font-semibold bg-blue-500 mt-3" type="submit">
          Đăng nhập</Button></div>
        <div className="flex justify-center gap-3 mt-2 items-center flex-col">
          <span>Hoặc đăng nhập bằng</span>
          <div className="gap-10 flex flex-row">
            <FontAwesomeIcon onClick={handleLogin} icon={faGoogle} size="3x" />
            <FontAwesomeIcon  onClick={handleLogin} icon={faJira} size="3x"/>
          </div>
          <div>
            <span>Bạn không có tài khoản? <span onClick={() => navigate('/signup')} className="cursor-pointer font-bold">Đăng ký ngay</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}