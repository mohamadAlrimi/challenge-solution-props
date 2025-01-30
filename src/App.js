import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
import MyBottun from "./MyBottun";
import MyInput from "./MyInput";
import MyForm from "./MyForm";
import MyTaskInput from "./MyTaskInput";
function App() {
  const MyPost=[
    {id :1 ,title :"tis is the first "  , Ph:"this is the pharagraf for first post"},
    {id :2 ,title :"tis is the second " ,Ph:"this is the pharagraf for second post"},
    {id :3 ,title :"tis is the first "  , Ph:"this is the pharagraf for first post"},
    {id :4 ,title :"tis is the second " ,Ph:"this is the pharagraf for second post"}
  ]
  const Posts= MyPost.map((post)=>{
    return(<div key={post.id}> <h1>{post.title}</h1>
    <hr></hr>
    <p>{post.Ph}</p>
    </div>)
  })
  const MyList = [
    { id: 1, title: "do my home work" },
    { id: 2, title: "do my home work2" },
    { id: 3, title: "do my home work3" },
    { id: 4, title: "do my home work4" },
    { id: 5, title: "do my home work5" },
  ];
  const Tasks = MyList.map((task) => {
    return (
      <li key={task.id}>
        {" "}
        {task.id} <span>- </span>
        {task.title}
      </li>
    );
  });
  return (
    <div className="App">
      <Header />
     <MyBottun/>
     <MyInput/>
     <MyForm/>
     <MyTaskInput/>

      {/* POSTS CONTAINER */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>
            <Post>
              {" "}
              <>
                <h1> 20</h1>
                <h1>أكاديمية محمد الريمي </h1>
              </>
              <hr></hr>
              <p>أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها</p>
            </Post>

            <Post>
              <>
                <h1>hello World</h1>
                <hr></hr>
                <p>this is the hello world artical</p>
              </>
            </Post>
            <Post>
              {" "}
              <>
                <h1>Post 3</h1>
                <hr></hr>
                <p>this is the body of post 3</p>
              </>
            </Post>

            {/* <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>

        <h1>Tarmeez Academy</h1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={{  border:"2px solid red",marginBottom:"20px", width:"50%" ,margin:"auto" ,height:"100%", justifyContent:"center" ,alignItems:"center"}}>
        {Posts}</div>
      <div
        style={{
          background: "green",
       
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <ul> {Tasks}</ul>
      </div>
    </div>
  );
}

export default App;
