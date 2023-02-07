import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <div className="herobox">
        <h1 className="heroh1">Housr Way</h1>
        <h3 className="heroh3">Make it happen, with Housr</h3>
        <div className="herovideo">
          <video className="video" controls autoplay>
            <source src="/image/houservideo.mp4" type="video/mp4" />
          </video>
          <div className="herobox1">
            <h5 className="heroh5">
              Impeccable Interiors That Rival Your Style
            </h5>
            <h6 className="heroh6">
              Fully furnished & managed spaces with contemporary decor and
              top-notch functionality.
            </h6>
            <h5 className="heroh52">All-Inclusive In-House Amenities</h5>
            <h6 className="heroh62">
              From fresh meals to doorstep laundry, all your lifestyle needs are
              met with a click within your property.
            </h6>
            <h5 className="heroh53"> Privacy + Community + Security</h5>
            <h6 className="heroh63">
              The perfect blend of personal and communal living, all with 24/7
              security.
            </h6>
          </div>
        </div>
      </div>
      <h1 className="heroh11">Housr Amenities</h1>
      <h4 className="maid">
        {" "}
        No cook, no maid, no chores. Let Housr simplify your life!
      </h4>
    </>
  );
};
