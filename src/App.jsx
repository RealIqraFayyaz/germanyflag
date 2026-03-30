import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";

export default function App(){
  return(
    <>
    <h1 className="text">GERMANY FLAG</h1>
    <div className="flag">
      <Row1/>
      <Row2/>
      <Row3/>
    </div>
    </>
  );
}