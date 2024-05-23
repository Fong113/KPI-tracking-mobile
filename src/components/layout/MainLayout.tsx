import Header from "./Header";
import TabBar from "./TabBar"
import './mainlayout.css'
type Prop = {
  children: any;
}
export default function MainLayout ({children} : Prop) {
  return (
    <div className="containerCustom">
      <div className="header-bar"><Header /></div>
      <div className="content">{children}</div>
      <div className="bottom-bar"><TabBar /></div>
    </div>
  )
}