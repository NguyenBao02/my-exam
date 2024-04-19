import ModalCreateUser from "./modalCreateUser";
import './content.scss';

const ManagerUser = (props) => {
    var abc = 'cba';
    return (
        <div className="maneger-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="users-content">
                <div>
                    <ModalCreateUser abc={abc} />
                    <div>Table</div>
                </div>
            </div>
        </div>
    );
}

export default ManagerUser;