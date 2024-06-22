import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const HomepagevTwo = React.lazy(() => import("pages/HomepagevTwo"));
const DetailleproductpagevTwoOne = React.lazy(
  () => import("pages/DetailleproductpagevTwoOne"),
);
const ReviewvTwo = React.lazy(() => import("pages/ReviewvTwo"));
const Register = React.lazy(() => import("pages/Register/index"));
const Profileaccountdetails = React.lazy(() => import("pages/Profileaccountdetails/index"));
const ProfileorderhistoryOne = React.lazy(() => import("pages/ProfileorderhistoryOne"));
const ProfileorderhistoryTwo = React.lazy(() => import("pages/ProfileorderhistoryTwo"));

const CartpagevTwo = React.lazy(() => import("pages/CartpagevTwo"));
const SignpagevTwo = React.lazy(() => import("pages/SignpagevTwo"));
const PaymentvTwo = React.lazy(() => import("pages/PaymentvTwo"));

const DetailleproductpagevThree = React.lazy(
  () => import("pages/DetailleproductpagevThree"),
);
const DetailleproductpagevTwo = React.lazy(
  () => import("pages/DetailleproductpagevTwo"),
);
const PlacedordervTwo = React.lazy(() => import("pages/PlacedordervTwo"));
const ShippingvTwo = React.lazy(() => import("pages/ShippingvTwo"));
const NewreleasepagevTwo = React.lazy(() => import("pages/NewreleasepagevTwo"));
const DealspagevTwo = React.lazy(() => import("pages/DealspagevTwo"));
const Footeroption = React.lazy(() => import("pages/footeroption"));
const InformationpagevTwo = React.lazy(
  () => import("pages/InformationpagevTwo"),
);
const CategorypagevTwo = React.lazy(() => import("pages/CategorypagevTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomepagevTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/categorypagevtwo" element={<CategorypagevTwo />} />
          <Route path="/Footeroption" element={<Footeroption/>} />
          <Route
            path="/informationpagevtwo"
            element={<InformationpagevTwo />}
          />
          <Route path="/dealspagevtwo" element={<DealspagevTwo />} />
          <Route path="/newreleasepagevtwo" element={<NewreleasepagevTwo />} />
          <Route path="/shippingvtwo" element={<ShippingvTwo />} />
          <Route path="/placedordervtwo" element={<PlacedordervTwo />} />
          <Route
            path="/detailleproductpagevtwo"
            element={<DetailleproductpagevTwo />}
          />
          <Route
            path="/detailleproductpagevthree"
            element={<DetailleproductpagevThree />}
          />
          <Route path="/paymentvtwo" element={<PaymentvTwo />} />
          <Route path="/signpagevtwo" element={<SignpagevTwo />} />
          <Route path="/cartpagevtwo" element={<CartpagevTwo />} />
          <Route path="/reviewvtwo" element={<ReviewvTwo />} />
          <Route
            path="/detailleproductpagevtwoone"
            element={<DetailleproductpagevTwoOne />}
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profileaccountdetails" element={< Profileaccountdetails />} />
          <Route path="/ProfileorderhistoryOne" element={<ProfileorderhistoryOne />} />
          <Route path="/ProfileorderhistoryTwo" element={<ProfileorderhistoryTwo />} />
   
          <Route path="/homepagevtwo" element={<HomepagevTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
