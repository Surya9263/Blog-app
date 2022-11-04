import Sidebar from "../../components/sidebar/Sidebar"
import "./Setting.css"

const Setting = () => {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">
                    Update your Account
                </span>
                <span className="settingDeleteTitle">
                    Delete your Account
                </span>
            </div>
            <form className="settingForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingProfilePic">
                    <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <label htmlFor="fileInput"><i className="SeetingProfilePicIcon fa-regular fa-circle-user"></i></label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Surya"/>
                <label>Email</label>
                <input type="email" placeholder="surya@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting