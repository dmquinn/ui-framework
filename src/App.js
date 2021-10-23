const App = () => {
  return (
    <>
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-red"></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-red-dark"></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-red-darker"></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-red-lighter text-center">
              <h5 className="text-middle">HELLO YOU</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-blue"></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-blue-dark"></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-blue-darker"></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="w-full h-5 bg-blue-darkest text-center">
              <h1 className="text-sm-10 text-md-15 text-lg-40 text-white text-middle">
                HELLO
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
