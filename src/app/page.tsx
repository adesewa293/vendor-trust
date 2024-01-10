

export default function page() {
  return (
    <div>
      <div className="bg-green-900 mb-4 p-40">
      <div className="text-3xl">Read Reviews. Write Reviews. Find vendors you can trust</div>
      <div>
        <input placeholder="Business name"></input> <button>Search</button>
      </div>
      </div>
      <div className="bg-white text-black p-40">
      <p>Explore Categories</p>
      <ul className="flex flex-wrap justify-between">
        <li className="border-2 border-black-200">Electronics and Technology</li>
        <li className="border-2 border-black-500">Home and Furniture</li>
        <li className="border-2 border-black-500">Fashion and Apparel</li>
        <li className="border-2 border-black-500">Beauty and Personal Care</li>
        <li className="border-2 border-black-500">Health and Wellness</li>
        <li className="border-2 border-black-500">Automotive</li>
        <li className="border-2 border-black-500">Travel and Leisure</li>
        <li className="border-2 border-black-500">Food and Beverage</li>
        <li className="border-2 border-black-500">Financial Services</li>
        <li className="border-2 border-black-500">Home Services</li>
        <li className="border-2 border-black-500">Education and Training</li>
        <li className="border-2 border-black-500">Entertainment and Media</li>
        <li className="border-2 border-black-500">Business and Industrial</li>
        <li className="border-2 border-black-500">Toys and Hobbies</li>
        <li className="border-2 border-black-500">Sports and Outdoors</li>
        <li className="border-2 border-black-500">Pet Supplies</li>
        <li className="border-2 border-black-500">Miscellaneous</li>
      </ul>
      </div>
      <div>Recent reviews</div>
    </div>
  );
}
