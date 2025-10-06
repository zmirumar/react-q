import Xabi from "../assets/xabi.jpg";
import Xabi1 from "../assets/xabi1.png";
import Xabi2 from "../assets/xabi2.png";
import Xabi3 from "../assets/xabi3.png";
import Xabi4 from "../assets/xabi4.png";
import Xabi5 from "../assets/xabi5.png";
import Xabi6 from "../assets/xabi6.png";
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
        <img style={{ width: "200px", height: "200px" }} src={Xabi} alt="" />
        <img style={{ width: "200px", height: "200px" }} src={Xabi1} alt="" />
        <img style={{ width: "200px", height: "200px" }} src={Xabi2} alt="" />
        <img style={{ width: "200px", height: "200px" }} src={Xabi3} alt="" />
        <img style={{ width: "200px", height: "200px" }} src={Xabi4} alt="" />
        <img style={{ width: "200px", height: "200px" }} src={Xabi5} alt="" />
        <img style={{ width: "200px", height: "200px" }} src={Xabi6} alt="" />
      </div>
      <h1>Hasan Legenda</h1>

      <button onClick={HasanButton}>Hasan's Button</button>
    </div>
  );
}

export default Hasan;
