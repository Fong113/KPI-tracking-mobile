import TreeIcon from '@/assets/icons/sidebar/tree';
import { Badge, TabBar } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
  PieOutline
} from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default () => {
  const tabs = [
    {
      key: '/home',
      title: 'Trang chủ',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '/todo',
      title: 'Nhiệm vụ',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: '/report',
      title: 'Báo cáo',
      icon: <PieOutline />,
      badge: '5',
    },
    {
      key: '/personal',
      title: 'Cá nhân',
      icon: <UserOutline />,
    },
    {
      key: '/tree',
      title: 'Cây',
      icon: <TreeIcon width="26" height="24"/>
    }
  ]
  const navigate = useNavigate();

  // const [activeKey, setActiveKey] = useState('home')

  const location = useLocation()
  console.log(location);
  
  
  const handleChangeBar = (e: any) => {
    // setActiveKey(e)
    navigate(e)
    
  }

  return (
    <>
      <div className=''>
        <TabBar activeKey={location.pathname} onChange={handleChangeBar}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>

    </>
  )
}