

function Header() {

    const headerStyle = {
    background: "linear-gradient(0deg, #dedbd2, #dad7cd)",
    color: "black",
    padding: "25px",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "2px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
  };

    
    return <header style={headerStyle}> <h1>Header Section</h1></header>
}

export default Header;