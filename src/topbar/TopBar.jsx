import "./topbar.css"

export default function topbar() {
  return (
 <div className="topbar">
    <div className="topleft">
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-instagram"></i>
    </div>
    <div className="topcenter">
        <ul className="toplist">
            <li className="toplistitem">HOME</li>
            <li className="toplistitem">ABOUT</li>
            <li className="toplistitem">CONTACT</li>
            <li className="toplistitem">WRITE</li>
            <li className="toplistitem">LOGOUT</li>
        </ul>
    </div>
    <div className="topright">
    <img className="topimg"
     src="https://cdn.imgbin.com/8/19/22/imgbin-levi-anime-attack-on-titan-chibi-eren-yeager-anime-xpCjKaEDzFEQTXr4svsUJAjsg.jpg"
    atl=""
    />
    <i className="searchicon fa-solid fa-magnifying-glass"></i>
 </div>
 </div>
  )
}
