import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'

const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Man
            </div>

            <div className="users-content">
                <div>
                    <button>
                        Add
                    </button>
                </div>
                <div>
                    table
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser