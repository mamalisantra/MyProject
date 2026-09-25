import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import CounterSlice from "./CounterSlice";
import IncrementByTwo from "./IncrementByTwo";
import UseEffectCases from "./UseEffectCases";
import Sample from "./context/Sample";
import UseRefInpt from "./UseRefInpt";
import UseRefCount from "./UseRefCount";
import UseRefFocus from "./UseRefFocus";
import SampleStudentData from "./SampleStudentData";
import AnchorTagPractice from "./HtmlTopics/AnchorTagPractice";
import HtmlPracticeComponent from "./HtmlTopics/HtmlPractice";
import PrintUsingRef from "./PrintUsingRef";
import PdfUsingReactrenderer from "./PdfCreationMethods/PdfusingReactrenderer";
import DOMConcept from "./DOMConcept/DOMConcept";
import CallBack from "./AsynchronousJavaScript/CallBack";
import AxiosConcept from "./AxiosConcept/AxiosConcept";
import PromiseConceptThenCatch from "./AsynchronousJavaScript/PromiseConceptThenCatch";
import PromiseConceptAsyncAwait from "./AsynchronousJavaScript/PromiseConceptAsyncAwait";

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

                {/* ***********Asynchronous ************** */}
                <Route path="/CallBack" element={<CallBack />} />
                <Route path="/PromiseConceptThenCatch" element={<PromiseConceptThenCatch />} />
                <Route path="/PromiseConceptAsyncAwait" element={<PromiseConceptAsyncAwait />} />


                {/* *********** Axios Concept ******** */}
                <Route path="/AxiosConcept" element={<AxiosConcept />} />

            </Routes>
        </BrowserRouter>
    );
}
