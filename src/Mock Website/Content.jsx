
function Content() {

     const contentStyle = {
    flex: 1,
    padding: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    margin: "120px auto",
    width: "70%",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
  };


    return <main><p style={contentStyle}>This is the content area</p></main>
}

export default Content;