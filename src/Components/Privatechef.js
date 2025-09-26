import react from 'react';

const  Privatechef = () => {
  const privatechefBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')"
  };

  return (
    <>
      <div className="full-page-background" style={privatechefBackgroundStyle}></div>
      <div className='page-content'>
        <h1>Private chef Page</h1>
        <p>This is Private chef component.</p>
      </div>
    </>
  );
}

export default Privatechef;