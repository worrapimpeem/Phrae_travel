import './AppHeader.css';

function AppHeader() {
  return (
    <div>
      <header className="app-header">
        <img className="app-header-logo" src="/images/logo3.jpg" alt="Just Tattoo" />
      </header>
      <h3 className="app-header-h3">Phrae province welcomes.</h3>
      <header className="app-header2">
        <h4 className="app-header-h4">This website is set up to promote places in Phrae Province.</h4>
      </header>
    </div>
  );
}

export default AppHeader;
