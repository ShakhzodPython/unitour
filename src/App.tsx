import { Header } from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router";
import { Uzbekistan } from "./components/Tours/Uzbekistan/Uzbekistan";
import { Footer } from "./components/Footer/Footer";
import { Europe } from "./components/Tours/Europe/Europe";
import { TourDetail as UzbekistanTourDetail } from "./components/Tours/Detail/Detail";
import { TourDetail as EuropeTourDetail } from "./components/Tours/EuropeDetail/Detail";
import { Sanatorium } from "./components/Tours/Sanatorium/Sanatorium";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tours/uzbekistan" replace />} />
        <Route path="/tours/uzbekistan" element={<Uzbekistan />} />
        <Route path="/tours/europe" element={<Europe />} />
        <Route path="/tours/sanatoriums" element={<Sanatorium />} />
        <Route
          path="/tours/uzbekistan/:tour_id"
          element={<UzbekistanTourDetail />}
        />
        <Route path="/tours/europe/:tour_id" element={<EuropeTourDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
