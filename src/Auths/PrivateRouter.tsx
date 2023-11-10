import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from '../stores/RootStore.store';
export const UserRouter= ()=> 
{
  const store = useStore()
  if (!store.userAccess?.user) {
    return <Navigate to="/login" />
  }
  return <Outlet />;
}

export const AdminRouter= ()=> 
{
  const store = useStore()
  console.log(store.userAccess?.user?.role === 'admin');
  
  if (!store.userAccess?.user || store.userAccess?.user?.role !== 'admin') {
    return <Navigate to="/" />
  }
  return <Outlet />;
}