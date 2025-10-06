import { Popconfirm } from "antd";

function Hasan() {
  const HasanButton = () => {
    alert("My brother Mirumar write codes better than me");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    confirm("Do you agree?") ? alert("You are right") : alert("You are wrong");
  };
  return (
    <div>
      <Popconfirm
        title="Mirumar Ukam Kot Legend"
        description="Mirumar: 'Hasan aka mani kechirin'"
        okText="Ha"
        cancelText="Yo‘q"
      >
        <button style={{ padding: "30px", width: "1000px" }}>
          Mirumar Ukam Bos
        </button>
      </Popconfirm>
      <h1>Hasan Legenda</h1>

      <button onClick={HasanButton}>Hasan's Button</button>
    </div>
  );
}

export default Hasan;
