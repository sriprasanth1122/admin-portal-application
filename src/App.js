import logo from './logo.svg';
import './css/sb-admin-2.css';
import './App.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Dashboard from './Dashboard'
import Users from './Users';
import Userview from './Userview';
import Login from './Login';
import Portal from './Portal'
import Products from './Products';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import Demo from './Demo';
import CreateProduct from './CreateProduct';
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';
import { UserProvider } from './userContext';
import Profile from './Profile';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

      <UserProvider>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/open-portal" element={<Portal />} />

          <Route path='/portal' element={<Portal />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='users' element={<Users />} />
            <Route path='profile' element={<Profile />} />
            <Route path='users/view/:id' element={<Userview />} />
            <Route path='users/edit/:id' element={<EditUser />} />
            <Route path='create-user' element={<CreateUser />} />
            <Route path='products' element={<Products />} />
            <Route path='create-product' element={<CreateProduct />} />
            <Route path='products/view/:id' element={<ProductView />} />
            <Route path='products/edit/:id' element={<ProductEdit />} />
          </Route>

        </Routes>

      </UserProvider>


    </BrowserRouter>
  );
}

export default App;
