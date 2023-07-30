import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.scss"
import HomeController from "./main/controllers/HomeController";
import NewChampionController from "./main/controllers/Champions/NewChampionController";
import FilterMemberShipController from './main/controllers/MemberShip/FilterMemberShipController'
import RenewalMembershipController from './main/controllers/MemberShip/Renewal_membershipController'
import PaymentSummeryController from "./main/controllers/MemberShip/PaymentSummeryController";
import PaymentSuccessController from "./main/controllers/MemberShip/PaymentSuccessController";
import AuthenticationController from "./main/controllers/AuthenticationController";
import SettingsController from "./main/controllers/SettingsController";
import StaffController from "./main/controllers/Staffs/StaffController";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomeController />} />
          <Route path="add-member" element={<NewChampionController />} />
          <Route path="membership" element={<FilterMemberShipController />} />
          <Route path="renewal-membership" element={<RenewalMembershipController />} />
          <Route path="payment-summery" element={<PaymentSummeryController />} />
          <Route path="payment-success" element={<PaymentSuccessController />} />
          <Route path="login" element={<AuthenticationController />} />
          <Route path="settings" element={<SettingsController />} />
          <Route path="staff" element={<StaffController />} />
          
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
