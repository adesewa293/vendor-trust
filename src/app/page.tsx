import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="bg-green-900 mb-4 p-40 flex justify-between">
        <div>
        <div className="text-3xl">
          Read Reviews. Write Reviews. Find vendors you can trust
        </div>
        <div>
          <input
            className="border-2 border-black-200 rounded-lg m-4 p-4"
            placeholder="Business name"
          ></input>{" "}
          <button>Search</button>
        </div>
        </div>
        <div>
          <Image
            src="/vendor-trust.jpg"
            alt="My Image Alt Text"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="bg-white text-black p-40">
        <div className="flex justify-between">
          <p className="text-3xl">Explore Categories</p>
          <p className="text-3xl">View All</p>
        </div>
        <ul className="flex flex-wrap justify-between">
          <li className="border-2 border-black-200 p-4 m-4 rounded-lg">
            Electronics and Technology
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Home and Furniture
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Fashion and Apparel
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Beauty and Personal Care
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Health and Wellness
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Automotive
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Travel and Leisure
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Food and Beverage
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Financial Services
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Home Services
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Education and Training
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Entertainment and Media
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Business and Industrial
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Toys and Hobbies
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Sports and Outdoors
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Pet Supplies
          </li>
          <li className="border-2 border-black-500 p-4 m-4 rounded-lg">
            Miscellaneous
          </li>
        </ul>
      </div>
      <div>
        <div>Be Heard</div>
        <p>
          Trustpilot is a review platform that's open to everyone. Share your
          experiences to help others make better choices and encourage companies
          to up their game.
        </p>
        <button className="border-2 border-black-200 rounded-lg m-4 p-4">
          What we do
        </button>
      </div>
    </div>
  );
}
