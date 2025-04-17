let _project: any;

export function setProjectHook(project: any){
    _project = project;
}

export function getProjectHook(){
    return _project;
}