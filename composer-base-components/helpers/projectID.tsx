import ProjectService from "../../../services/ProjectService";

function getProjectID(){
    return ProjectService.projectId;
}

export default getProjectID;