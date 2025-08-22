
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function ActivityApp() {


   const appStyle = {
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background:  '#ffe6a7'
  };

    return (
        <div style={appStyle}>
        <Header/>
        <Content/>
        <Footer/>
        
        </div>
      
    )
}

export default ActivityApp;



//MockApp is the main background box that connects everything. Inside it, we render Header, Content, and Footer as separate components. Each component has its own styling defined as a JavaScript object (a variable), and we pass it in curly braces {} inside JSX. In main.jsx, we only need to render MockApp, and React takes care of showing all parts together.