import { Button } from "@/components/ui/button";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Input, message, Upload } from "antd";
import { toast } from "react-toastify";

const { Dragger } = Upload;
const { TextArea } = Input;

export default function CommentPage() {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleSubmit = () => {
    toast.success("Gửi thành công")
  }

  return (
    <>
      <div className="items-end px-11 pt-9 pb-20 text-lg font-medium text-gray-800 bg-white rounded-2xl shadow-sm w-full max-md:px-5">
        <header className="flex flex-row text-3xl text-black justify-between w-full">
          <div className="text-[26px] font-medium text-[#1d2d35]">
            Bạn cần trợ giúp gì?
          </div>
          {/* <img
            loading="lazy"
            onClick={() => setPopup(false)}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f3cdb4f738951056cd82ceb92f181ffc7a691831fe00aab54da939ee58d9d52?apiKey=f19a917c094b4f6fa8172f34eb76d09c&"
            alt="Account Selection Icon"
            className="shrink-0 w-[25px] text-[#1D2D35]"
          /> */}
        </header>
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-col gap-[5px]">
            <div className="mt-[29px]">Mô tả vấn đề của bạn</div>
            <TextArea rows={4} placeholder="Mô tả vấn đề" maxLength={6} />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div>
              Ảnh chụp màn hình sẽ giúp chúng tôi hiểu rõ hơn về vấn đề của
              bạn. (không bắt buộc)
            </div>
            <div>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Bấm hoặc kéo thả ảnh vào đây
                </p>
                <p className="ant-upload-hint">
                  Hỗ trợ đăng tải một hay nhiều ảnh cùng lúc
                </p>
              </Dragger>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-end mt-[20px] hover:opacity-90">
          <Button variant="submit" onClick={handleSubmit}>Gửi</Button>
        </div>
      </div>
    </>
  );
}