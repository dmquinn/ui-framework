const App = () => {
  return (
    <>
      <div
        className="container-lg"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1528502500164-ddfa429afa70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="jumbotron glass-light rounded-lg h-40 hover-shadow hover-blur">
          <h1 className="ml-2 text-white text-glass">HELLO</h1>
        </div>
      </div>
      <div className="m-2 p-1 w-10 center shadow-deep h-full hover-shadow  bg-vintage-green">
        HELLO
      </div>
    </>
  );
};

export default App;
