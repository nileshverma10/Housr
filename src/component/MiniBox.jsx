import "./MiniBox.css";

export const MiniBox = () => {
  return (
    <>
      <div className="mini">
        <h6 className="offer">
          Housr offers Fully furnished & managed stays in luxuriously-designed
          solo rooms, twin rooms, studio
        </h6>
        <h6 className="unit">
          units, and complete apartments, located within walking distance of the
          city’s hotspots.
        </h6>
        <div className="minibox1">
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className="us">About US</p>
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className="privacy">Privacy Policy</p>
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className="can">Cancellation Policy</p>
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className="pay1">Payment & Condition</p>
        </div>
        <div className="minibox2">
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className="blog">Blog</p>
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className="news">Housr in News</p>
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className=" ct">Contact Us</p>
          <i class="fa-sharp fa-solid fa-angle-right item"></i>
          <p className=" pt">Patner with US</p>
        </div>
      </div>
    </>
  );
};
