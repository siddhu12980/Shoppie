import { MobileSidebar } from "../components/MobileSidebar";
import { ProfileImg } from "../components/ProfileImg";
import { Header } from "../components/Header";
import { MobileHeader } from "../components/MobileHeader";
import { OrderList } from "./components/OrdersList";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between md:pb-5">
        <MobileSidebar />
        <Header title="Orders" />
        <ProfileImg />
      </div>
      <MobileHeader title="Orders" />
      <OrderList />
    </div>
  );
}
