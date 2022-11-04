import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItems">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="https://img.freepik.com/premium-photo/beautiful-happy-smiling-woman-with-peonies-girl-with-bouquet-flowers_149112-2000.jpg?w=2000" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et quaerat, architecto magni repellat earum voluptas, neque odit sequi officiis beatae blanditiis! Praesentium nobis iure id facilis laborum iusto autem.</p>
        </div>
        <div className="sidebarItems">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItems">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar