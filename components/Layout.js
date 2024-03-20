import Sidebar from './Sidebar';

const RootLayout = ({ children }) => {
  return (
    <>
      <div className='App'>
        <div className='page'>
          {children}
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
