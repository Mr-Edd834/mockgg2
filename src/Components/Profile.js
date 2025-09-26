import react from 'react';

const Profile = () => {
  const profileBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')"
  };

  return (
    <>
      <div className="full-page-background" style={profileBackgroundStyle}></div>
      <div className='page-content'>
        <h1>Profile Page</h1>
        <p>This is the Profile component.</p>
      </div>
    </>
  );
}

export default Profile;
