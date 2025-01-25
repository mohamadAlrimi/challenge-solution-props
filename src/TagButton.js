import "./TagButtonStyle.css";
export default function TagButton({title ,children}) {

  return <button  onClick={TaskDon} className="tagButton">{title} {children }   </button>;
}
function TaskDon()
{ return alert("your task is done muhammed ")} 

