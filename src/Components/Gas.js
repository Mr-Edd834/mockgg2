import react from 'react';


const Gas = () => {
  const gasBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')"
  };

  return (
    <>
      <div className="full-page-background" style={gasBackgroundStyle}></div>
      <div className="page-content">
        <h1>Gas Page</h1>
        <p>This is the Gas component.</p>
      </div>
    </>
  );
}

export default Gas;