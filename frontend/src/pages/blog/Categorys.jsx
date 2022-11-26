import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Categorys() {
  return (
    <div className="p-4 bg-white shadow-md mb-3">
      <h2 className="text-xl font-bold mb-2">Category</h2>
      <div>
        <ul className="flex gap-4 justify-between">
          <li className="flex gap-4 items-center">
            <FaChevronRight />
            <Link to="#" className="hover:underline font-semibold">
              Algorithom
            </Link>
          </li>
          <span className="place-content-end">(7)</span>
        </ul>
      </div>

      <div>
        <ul className="flex gap-4 justify-between">
          <li className="flex gap-4 items-center">
            <FaChevronRight />
            <Link to="#" className="hover:underline font-semibold">
              Data science
            </Link>
          </li>
          <span className="place-content-end">(4)</span>
        </ul>
      </div>

      <div>
        <ul className="flex gap-4 justify-between">
          <li className="flex gap-4 items-center">
            <FaChevronRight />
            <Link to="#" className="hover:underline font-semibold">
              Web development
            </Link>
          </li>
          <span className="place-content-end">(9)</span>
        </ul>
      </div>

      <div>
        <ul className="flex gap-4 justify-between">
          <li className="flex gap-4 items-center">
            <FaChevronRight />
            <Link to="#" className="hover:underline font-semibold">
              Programming
            </Link>
          </li>
          <span className="place-content-end">(2)</span>
        </ul>
      </div>
    </div>
  );
}

export default Categorys;
