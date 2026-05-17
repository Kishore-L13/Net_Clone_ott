import React from "react";
const Header = ()=>{
    return(
        <div className="absolute w-screen px-8 py-2 `bg-gradient-to-b` from-black z-10 flex justify-between items-center">
        <img className="w-44" 
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        />
<div className="flex gap-4">
        {/* Language Select would go here */}
        <img src="https://avatars.githubusercontent.com/u/193820820?v=4&size=64"
        alt="profile"
        />
        <button onClick={}className="bg-red-600 text-white px-4 py-1 rounded-md">Sign Out</button>
      </div>
        </div>
    )
}
export default Header
