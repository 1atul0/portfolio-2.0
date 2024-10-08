import React  from "react";
function Footer(){
    const date=new Date();
    console.log(date.getFullYear());
    return(
        <div className="b-0 py-4 bg-gray-100 rounded-b-2xl text-center dark:bg-gray-800">
            © {date.getFullYear()} All Rights Reserved by <span className="text-red-400">Atul Kumar</span>.
        </div>
    )
}
export default Footer;