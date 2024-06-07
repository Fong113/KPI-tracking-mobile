import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes'
export default function App() {
  return (
    <div >
      <AllRoutes />
      <ToastContainer
        position= "top-right"
        autoClose= {2000}
        hideProgressBar= {false}
        closeOnClick= {true}
        pauseOnHover= {true}
        draggable= {true}
        theme= "light"
      />

    </div>
  )
}