import ProjectService from "../../../services/ProjectService";

function getProjectID(){
    return ProjectService.getProjectId();
}

export default getProjectID;