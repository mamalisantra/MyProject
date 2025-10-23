import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import CounterSlice from "./CounterSlice";
import IncrementByTwo from "./IncrementByTwo";
import UseEffectCases from "./UseEffectCases";
import Sample from "./context/Sample";
import UseRefInpt from "./UseRefInpt";
import UseRefCount from "./UseRefCount";
import UseRefFocus from "./UseRefFocus";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ******* Reducer-----useDispatch  useSelector ********** */}
                <Route path="/counterSlice" element={<CounterSlice />} />
                <Route path="/themeSwitcher" element={<ThemeSwitcher />} />

                {/* ********* UseState********** */}
                <Route path="/IncrementByTwo" element={<IncrementByTwo />} />

                {/* ********** useEffect*********** */}
                <Route path="/UseEffectCases" element={<UseEffectCases />} />

                {/* ********* createContext & useContext ********* */}
                <Route path="/Sample" element={<Sample />} />

                {/* ******** useRef ******* */}
                <Route path="/UseRefInpt" element={<UseRefInpt />} />
                <Route path="/UseRefCount" element={<UseRefCount />} />
                <Route path="/UseRefFocus" element={<UseRefFocus />} />

            </Routes>
        </BrowserRouter>
    );
}
