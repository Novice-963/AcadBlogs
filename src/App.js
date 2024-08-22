import './App.css';
import placeholder from './Avatar Placeholder.svg';
import blog from './blog.jpg';
import group from './Group 3.svg'

function post() {
  console.log('clicked');
}

function App() {
  return (
    <>
  <link rel="stylesheet" href="./temp.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inspiration&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inspiration&family=Kalam:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <div className="heading">Acad Blogs</div>
  <div className="nav">
    <div className="search">
      <div>
        <input type="search" className="type" placeholder="Search" />
      </div>
      <div>
        <button className="sbutton">
          <span
            className="material-symbols-outlined"
            style={{ opacity: "60%" }}
          >
            search
          </span>
        </button>
      </div>
    </div>
    <div className="set">
      <div className="dashboard">Dashboard</div>
      <div className="about">About</div>
      <div className="contact">Contact</div>
      <div className="profile">
        <img
          src={placeholder}
          style={{ width: "2vw", height: "2vw" }}
        />
      </div>
    </div>
  </div>
  <div style={{ position: "absolute", zIndex: -10 }}>
    <img src={group} style={{ marginTop: "-30vh", width: "100%" }} />
  </div>
  <div className="blog">
    <div className="blogimg">
      <img
        src={blog}
        style={{ objectFit: "cover", width: "50vw", height: "27vw" }}
      />
    </div>
    <div className="blogtext">
      Lorem Ipsum&nbsp;is simply dummy text of the printing and
      <br />
      typesetting industry. Lorem Ipsum has been the industry's
      <br />
      standard dummy text ever since Lorem Ipsum passages,
      <br />
      and more recently with desktop publishing software like
      <br />
      Aldus PageMaker including versions of Lorem Ipsum
    </div>
  </div>
  <div
    style={{
      width: "60vw",
      margin: "auto",
      paddingLeft: "10vw",
      paddingTop: "8vh"
    }}
  >
    <div className="tell">Tell us about your thoughts!!</div>
    <div>
      <input type="search" className="type2" />
    </div>
    <div className="post" onClick={post}>Post</div>
  </div>
</>

  );
}

export default App;
