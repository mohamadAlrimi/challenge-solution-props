export default function Post({children }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        background: "white",
        margin: "25px",
      }}
    >
     {children}
    </div>
  );
}
