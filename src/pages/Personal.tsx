import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface InputProps {
  label: string;
  defaultValue: string;
}
type Props = {};
export const InputProfile = ({ label, defaultValue }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-xl font-medium">{label}</Label>
      <Input defaultValue={defaultValue} className="" />
    </div>
  );
};

type AccountOptionProps = {
  src: string;
  alt: string;
  text: string;
};

const AccountOption: React.FC<AccountOptionProps> = ({ src, alt, text }) => (
  <div className="flex gap-5 py-4 pr-52 pl-6 mt-8 text-center whitespace-nowrap bg-white border border-solid shadow-sm border-zinc-300 w-[300px]  rounded-lg">
    <img loading="lazy" src={src} alt={alt} className=" w-[26px]" />
    <div className="">{text}</div>
  </div>
);

export default function Profile({ }: Props) {
  const accountOptions = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2850bc7d0dd698d06bc296ede35c5bb644408a66a110899dbd4af76eb676e16?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Google Logo",
      text: "Google",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d89791b8491f51a7ed8c57ed483e22991813a32b66f3517113602278e5573f53?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Jira Logo",
      text: "Jira",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f52e4e3e0dc113ace92f8d2342203273b0fd095ddce1a917ec609d5a72e1fe01?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Slack Logo",
      text: "Slack",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21c3f259ea89f2d3de83a6b52984b9a64c383c484eaafa97b9122ca3a47ee078?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Microsoft 365 Logo",
      text: "Microsoft 365",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bce8ae8cd65fc28bff42df7f2a3d10a2dd1346e7ebeb4afa557bf40ae6ffc6ee?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "X Logo",
      text: "X",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9668f822d2a9a48f98ac6032765d26976dae5edcf0441ad00358a3941d1bfa17?apiKey=f19a917c094b4f6fa8172f34eb76d09c&",
      alt: "Telegram Logo",
      text: "Telegram",
    },
  ];

  // const navigate = useNavigate();
  const [selected, setSelected] = useState("op1");
  const [popup, setPopup] = useState(false);
  const handleBackPopup = () => {
    setPopup(false);
  };
  const handleOp1 = () => {
    setSelected("op1");
  };
  const handleOp2 = () => {
    setSelected("op2");
  };
  // const handleCancel = () => {
  //   toast.error("Đã hủy bỏ thay đổi");
  // };
  const handleSubmit = () => {
    toast.success("Đã lưu thay đổi");
  };
  const handleLink = () => {
    setPopup(true);
  };
  // const handleBack = () => {
  //   navigate("/");
  // };

  return (
    <>
      <div className="flex flex-col m-w-[100%] ">
        <div className="flex flex-col gap-[39px]">
          <div className="flex flex-row gap-[27px] mt-[20px]">
            <p className="text-blue-500 ml-5 text-2xl font-semibold">
              Thiết lập tài khoản
            </p>
          </div>
          <div className="content">
            <div className="header flex flex-1 justify-around flex-row border-b-2 border-solid border-[#82ccf1]">
              <div
                onClick={handleOp1}
                className={`text-xl flex justify-center ${selected === "op1"
                  ? "text-[#1D2D35] border-b-4 border-solid border-[#307ba7]"
                  : ""
                  }`}
              >
                Thông tin
              </div>
              <div
                onClick={handleOp2}
                className={`text-xl flex justify-center  ${selected === "op2"
                  ? "text-black border-b-4 border-solid border-[#5263FF]"
                  : ""
                  }`}
              >
                Liên kết
              </div>
            </div>
            <div className="h-full">
              {selected === "op1" ? (
                <div className="flex flex-col items-center justify-center ml-2 px-6">
                  <div className="avatar  mx-auto flex flex-col  justify-center items-center">
                    <div className="flex justify-center ">
                      <img src="/avt.png" className="w-[200px] " alt="avatar nè" />
                    </div>
                    <div>
                      <div
                        className="px-5 border-solid border h-[22px] rounded-[5px] bg-white flex justify-center"
                      >
                        Tải ảnh lên
                      </div>
                    </div>
                  </div>
                  <div className="info flex flex-col gap-[31px]">
                    <div className="flex flex-col justify-center gap-7 mt-[30px]">
                      <InputProfile
                        label="Email"
                        defaultValue="test@gmail.com"
                      />
                      <InputProfile
                        label="Tên đăng nhập"
                        defaultValue="windbeandz"
                      />

                      <InputProfile
                        label="Số giờ dự kiến làm việc trong tháng"
                        defaultValue="60"
                      />

                      <InputProfile label="Quốc gia" defaultValue="Việt Nam" />
                      <InputProfile label="Thành phố" defaultValue="Hà Nội" />
                    </div>
                    <div className="flex align-center mb-5 justify-around">
                      <Button variant="submit" onClick={handleSubmit} className="text-white w-40 text-xl bg-blue-500">
                        Lưu thay đổi
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex p-3 flex-col justify-between  mt-5">
                  <div className="flex flex-col p-5 rounded-[20px] bg-white border-solid border-2 border-[#ccc] gap-3">
                    <div className=" text-blue-500 text-xl text-left ">
                      Google
                    </div>
                    <div className=" text-xl">
                      Tài khoản của bạn{" "}
                      <p className="inline text-[#fb4949]">
                        nguyenvana@gmail.com
                      </p>{" "}
                      đã được liên kết với PhoKPI
                    </div>
                    {/* <div
                      className=" my-[8px]  bg-[#ff4d4f] rounded-[10px] h-10 text-xl text-center text-white flex items-center justify-center"
                    >
                      Hủy liên kết tài khoản này
                    </div> */}
                  </div>
                  <Button variant="submit" onClick={handleLink} className="text-white self-end fixed bottom-32 text-xl w-50 bg-blue-500">
                    Liên kết các tài khoản khác
                  </Button>

                  {popup && (
                    <>
                      <section className="fixed mt-[6vh] inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="overflow-hidden overflow-y-auto flex flex-col items-center h-[80vh]   px-11 pt-9 pb-20 text-lg font-medium #1D2D35 bg-white rounded-2xl shadow-sm max-w-[536px] max-md:px-5">
                          <header className="flex gap-12 items-center  text-3xl font-semibold #1D2D35">
                            <div className="flex-auto">
                              Chọn tài khoản
                            </div>
                            <img
                              loading="lazy"
                              onClick={handleBackPopup}
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f3cdb4f738951056cd82ceb92f181ffc7a691831fe00aab54da939ee58d9d52?apiKey=f19a917c094b4f6fa8172f34eb76d09c&"
                              alt="Account Selection Icon"
                              className="shrink-0 mr-2.5 -ml-0.5 aspect-[1.11] w-[20px]"
                            />

                          </header>

                          {accountOptions.map((option, index) => (
                            <AccountOption
                              key={index}
                              src={option.src}
                              alt={option.alt}
                              text={option.text}
                            />
                          ))}
                        </div>
                      </section>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
