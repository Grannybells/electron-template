import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/public/Login";
import MainLayout from "./components/layout/MainLayout";
import Home from "./screens/private/Home";
import About from "./screens/private/About";
import Settings from "./screens/private/Settings";
import PageNotFound from "./screens/PageNotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
