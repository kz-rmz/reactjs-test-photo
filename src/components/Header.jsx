export default function Header() {
  const header = {
    height: "4rem",
    width: "100%",
    textAlign: "center",
    backgroundColor: "hsla(193, 55%, 45%, 0.8)",
    position: "fixed",
    top: "0",
    zIndex: "999",
    boxShadow: "0px 6px 7px #5f6163",
  };
  return (
    <>
      <div style={header}>
        <h3 style={{ color: "#ffffff", fontSize: "1.5rem" }}>Album:</h3>
      </div>
    </>
  );
}
