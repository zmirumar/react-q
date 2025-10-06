import Xabi from "../assets/xabi.jpg";

function Hasan() {
  const HasanButton = () => {
    alert("My brother Mirumar write codes better than me");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    confirm("Do you agree?") ? alert("You are right") : alert("You are wrong");
  };
  return (
    <div>
      <div className="wrapper">
        <h1>Xabibiloh: Nma Gap. Mirumar: Dinch</h1>
        <img style={{ width: "500px", height: "500px" }} src={Xabi} alt="" />
      </div>
      <h1>Hasan Legenda</h1>

      <button onClick={HasanButton}>Hasan's Button</button>
    </div>
  );
}

export default Hasan;
