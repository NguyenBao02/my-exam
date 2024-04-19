import ModalCreateUser from "./modalCreateUser";
import './content.scss';

const ManagerUser = (props) => {
    return (
        <div className="maneger-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="users-content">
                <div>
                    <ModalCreateUser />
                    <div>Table</div>
                </div>
            </div>
        </div>
    );
}

export default ManagerUser;