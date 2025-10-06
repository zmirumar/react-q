function Hasan() {

  const HasanButton = () => {
    alert("My brother Mirumar write codes better than me");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    confirm("Do you agree?") ? alert("You are right") : alert("You are wrong");
  }
  return (
    <div>
      <h1>Hasan Legenda</h1>
      <button onClick={HasanButton}>Hasan's Button</button>
    </div>
  );
}

export default Hasan;
