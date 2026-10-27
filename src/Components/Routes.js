import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./ReduxConcept/ThemeSwitcher";
import CounterSlice from "./ReduxConcept/CounterSlice";
import IncrementByTwo from "./ReactHooks/IncrementByTwo";
import UseEffectCases from "./ReactHooks/UseEffectCases";
import Sample from "./context/Sample";
import UseRefInpt from "./ReactHooks/UseRefInpt";
import UseRefCount from "./ReactHooks/UseRefCount";
import UseRefFocus from "./ReactHooks/UseRefFocus";
import SampleStudentData from "./SampleStudentData";
import AnchorTagPractice from "./HtmlTopics/AnchorTagPractice";
import HtmlPracticeComponent from "./HtmlTopics/HtmlPractice";
import PrintUsingRef from "./ReactHooks/PrintUsingRef";
import PdfUsingReactrenderer from "./PdfCreationMethods/PdfusingReactrenderer";
import DOMConcept from "./DOMConcept/DOMConcept";
import CallBack from "./AsynchronousJavaScript/CallBack";
import AxiosConcept from "./AxiosConcept/AxiosConcept";
import PromiseConceptThenCatch from "./AsynchronousJavaScript/PromiseConceptThenCatch";
import PromiseConceptAsyncAwait from "./AsynchronousJavaScript/PromiseConceptAsyncAwait";
import TryAndCatch from "./ErrorHandlingConcept/TryAndCatch";
import BrowserLocalStorage from "./BrowserStorage/BrowserLocalStorage";
import BrowserSessionStorage from "./BrowserStorage/BrowserSessionStorage";
import BrowserCookies from "./BrowserStorage/BrowserCookies";
import MainFile from "./EsModules/MainFile";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ************** Html Practice *************** */}
                <Route path="/htmlPracticePath" element={<HtmlPracticeComponent />} />

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
                <Route path="/PrintUsingRef" element={<PrintUsingRef />} />


                {/* ********sample student task********* */}
                <Route path="/" element={<SampleStudentData />} />
                <Route path="/SampleStudentData" element={<SampleStudentData />} />
                <Route path="/AnchorTagPractice" element={<AnchorTagPractice />} />

                <Route path="/PdfUsingReactrenderer" element={<PdfUsingReactrenderer />} />

                {/* **********DOM Concept********** */}
                <Route path="/DOMConcept" element={<DOMConcept />} />

                {/* ***********Asynchronous Conceprt************** */}
                <Route path="/CallBack" element={<CallBack />} />
                <Route path="/PromiseConceptThenCatch" element={<PromiseConceptThenCatch />} />
                <Route path="/PromiseConceptAsyncAwait" element={<PromiseConceptAsyncAwait />} />


                {/* *********** Axios Concept ******** */}
                <Route path="/AxiosConcept" element={<AxiosConcept />} />

                {/* ***************Error Handling Concept********* */}
                <Route path="/TryAndCatch" element={<TryAndCatch />} />

                {/* **************** Browser Storage************* */}
                <Route path="/BrowserLocalStorage" element={<BrowserLocalStorage />} />
                <Route path="/BrowserSessionStorage" element={<BrowserSessionStorage />} />
                <Route path="/BrowserCookies" element={<BrowserCookies />} />

                {/* **************** ES Module ***************** */}
                <Route path="/MainFile" element={<MainFile/>}/>

            </Routes>
        </BrowserRouter>
    );
}
