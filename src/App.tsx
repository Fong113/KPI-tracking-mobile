import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes'

export default function App() {
  return (
    <div >
      <AllRoutes />
      <ToastContainer />
    </div>
  )
}