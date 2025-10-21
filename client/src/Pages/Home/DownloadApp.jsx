import './DownloadApp.css';
const DownloadApp = () => {
  return (
    <div className="download-wrapper">
      <div className="download-app">
        <div className="content">
          <h1>Instruo&nbsp;14</h1>
          <h3>Now in Mobile</h3>
          <p>
            Download the mobile app for Instruo 14 to register for events and
            get all important updates.
          </p>
            <img onClick={()=>window.open("https://instruo.tech", "_blank")} className="qrcode" src="/assets/Home/qr.svg" />
        </div>
        <div className="design">
          <img
            src="/assets/Home/instruo-mockup-mobile.png"
            alt="Download App"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
