import * as React from "react";
import style from "./ProfileStatus.module.css";
import {useState} from "react";
import {useEffect} from "react";

const ProfileStatusWithHooks = (props) => {

        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);

        useEffect( () => {
            setStatus(props.status);
        }, [props.status]);

        const activateEditMode = () => {
            setEditMode(true);
        };

        const deactivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
        };

        const onStatusChange = (e) => {
            setStatus(e.currentTarget.value);
        };

        return (
            <div>
                {!editMode &&
                <div>
                    Status: <span onDoubleClick={activateEditMode}
                              className={style.status}>{props.status || "---"}</span>
                </div>
                }
                {editMode &&
                <div>
                    Status: <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}/>
                </div>
                }
            </div>
        )
    }
;

export default ProfileStatusWithHooks;