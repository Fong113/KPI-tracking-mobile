import { Drawer, Menu } from "antd";
import {
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
type Props = {
  open: boolean;
  setOpen: any;
};
import type { MenuProps } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faCircleInfo,
  faBoxArchive,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Có gắn dấu sao",
    "/storage",
    <FontAwesomeIcon style={{ fontSize: "unset" }} icon={faStar} />
  ),
  getItem(
    "Lưu trữ",
    "/storage",
    <FontAwesomeIcon style={{ fontSize: "unset" }} icon={faBoxArchive} />
  ),
  getItem(
    "Trợ giúp",
    "/help",
    <FontAwesomeIcon style={{ fontSize: "unset" }} icon={faCircleInfo} />
  ),
  getItem(
    "Cài đặt",
    "/setting",
    <FontAwesomeIcon style={{ fontSize: "unset" }} icon={faGear} />
  ),
];

const MenuLeft = ({ open, setOpen }: Props) => {
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
  };
  const handleLogout =() => {
    navigate('/login')
  }
  return (
    <Drawer
      style={{ padding: 0 }}
      className="p-0"
      placement="left"
      width={"40vh"}
      closable={false}
      onClose={onClose}
      open={open}
    >
      <div className="flex flex-col gap-4 h-full">
        <div className="flex justify-center p-2 pt-0 border-b-2 border-solid border-[#d9d9d9]">
          <img src="/logo.png" alt="" className="w-[30vh]" />
        </div>
        <div className="flex flex-col h-full justify-between">
          <Menu
            style={{ border: "none", padding: 0 }}
            className="text-xl border-0 w-full flex flex-col jus font-medium"
            theme={"light"}
            selectedKeys={[location.pathname]}
            onClick={(e) => navigate(e.key)}
            mode="inline"
            items={items}
          />
          <div onClick={handleLogout} className=" text-red-500 pl-9 flex items-center gap-3 text-xl font-medium cursor-pointer hover:bg-slate-100 p-3 rounded-xl">
            <LogoutOutlined /> <span>Đăng xuất</span>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MenuLeft;
