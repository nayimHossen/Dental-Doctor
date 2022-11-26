import { Link } from "react-router-dom";

function Tags() {
  return (
    <div className="p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2">Tags</h2>
      <ul className="flex flex-wrap gap-2">
        <li className="p-2 bg-primary text-sm text-white rounded hover:underline">
          <Link to="#">Dental</Link>
        </li>
        <li className="p-2 bg-primary text-sm text-white rounded hover:underline">
          <Link to="#">Surgery</Link>
        </li>
        <li className="p-2 bg-primary text-sm text-white rounded hover:underline">
          <Link to="#">Orthpadix</Link>
        </li>
        <li className="p-2 bg-primary text-sm text-white rounded hover:underline">
          <Link to="#">Skin</Link>
        </li>
      </ul>
    </div>
  );
}

export default Tags;
