import { useEffect } from "react";
import backgroundImage from "/istockphoto-1191817260-612x612 1.png";

function Account() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center">
      <div className="max-w-[1512px] w-full mt-[0.2rem]">
        <div className="w-full">
          <img className="" src={backgroundImage} alt="" />
          <div className="flex  bg-red-900 px-20">
            <div className="max-h-full z-50 bg-yellow-900">
              <ul className="min-w-[250px] w-full">
                <li>My Account</li>
                <li>My Account</li>
                <li>My Account</li>
                <li>My Account</li>
                <li>My Account</li>
                <li>My Account</li>
              </ul>
            </div>
            <div className="bg-blue-900 max-w-[1122px] w-full h-[500px] -mt-16 ">
              Hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
