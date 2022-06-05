import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "./contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Emp2 from "./pages/Emp2";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Employees,
  Editor,
  Area,
  Calendar,
  ColorPicker,
  Stacked,
  Pie,
  Line,
  Orders,
  Customers,
  Pyramid,
  ColorMapping,
  Kanban,
  Financial,
  Bar,
} from "./pages";

function App() {
  const { activeMenu, themeSettings,currentColor,setCurrentColor,setCurrentMode,currentMode, setThemeSettings } = useStateContext();
  useEffect(()=>{
    const handleModeColor=()=>{
      const mode = localStorage.getItem('themeMode');
      const color = localStorage.getItem('colorMode');
      if(mode || color){
        setCurrentMode(mode);
        setCurrentColor(color);
      }
    }
    handleModeColor();
  },[])
  return (

    <div className={currentMode  === 'Dark' ? 'dark' :''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="center">
              <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
              <div className="w-72 z-[50000] fixed dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
          ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
          )}
          <div
              className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                  activeMenu ? " md:ml-72 " : "flex-2"
              }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/*Dashboard*/}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />

                {/*Pages*/}
                <Route path="/customers" element={<Customers />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/emp2" element={<Emp2 />} />

                {/*Apps*/}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/*Charts*/}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
