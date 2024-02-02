import AppBarProvider from './provider';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default function AppBar() {
  return (
    <AppBarProvider>
      <TopBar />
      <SideBar />
    </AppBarProvider>
  );
}
