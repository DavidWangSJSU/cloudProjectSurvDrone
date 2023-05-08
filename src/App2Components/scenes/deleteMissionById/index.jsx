import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import TenantIdSingleton from "../../components/TenantId";

function DeleteMissionById() {

    const navigate = useNavigate();

    const [missionPlan, setMissionPlan] = useState({
        MissionId: "",
        TenantId: TenantIdSingleton.id
    });

    const handleChange = (e) => {
        setMissionPlan((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const sendRequest = async(id) => {
        await axios.delete(`http://localhost:5001/api/deleteMissionPlanById/${missionPlan.MissionId}/${missionPlan.TenantId}`)
        .then((res) => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h3>Delete mission plan:</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(missionPlan);
                sendRequest()
                .then(() => navigate("/dashboard"));
            }}>
                <input type="text" name="MissionId" value={missionPlan.MissionId} onChange={handleChange} />
                <button type="submit">Delete mission plan</button>
            </form>
        </div>
    )
}

export default DeleteMissionById;