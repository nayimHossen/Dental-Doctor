import { useEffect } from "react";

function BottomToTop() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: ".1rem .5rem",
          fontSize: "30px",
          bottom: "40px",
          right: "35px",
          backgroundColor: "#2f62da",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <i class="ri-arrow-up-line"></i>
      </button>
    </div>
  );
}

export default BottomToTop;
