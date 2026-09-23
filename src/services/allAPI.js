import apiService from "../api/apiServices";

//saveResumeAPI : Add resume details to json server
export const saveResumeAPI = async(resumeDetails)=>{
    return await apiService('POST',"/resumes",resumeDetails)
}

//viewResumeAPI : called by view resume component when resume is added
export const viewResumeAPI = async(resumeId)=>{
    return await apiService('GET',`/resumes/${resumeId}`,{})
}

//allResumesAPI : called by all resume component when resume is added
export const allResumesAPI = async()=>{
    return await apiService('GET',`/resumes`,{})
}

//downloadResumeAPI : called by view resume component when resume get displayed
export const downloadResumeAPI = async(resumeDetails)=>{
    return await apiService('POST',`/downloads`,resumeDetails)
}

//getAllDownloadsResumeAPI : called by downloads component when resume get downloaded
export const getAllDownloadsResumeAPI = async()=>{
    return await apiService('GET',`/downloads`,{})
}

//

//deleteResumeAPI : called by all resume component when delete button is clicked
export const deleteResumeAPI = async(resumeId)=>{
    return await apiService('DELETE',`/resumes/${resumeId}`,{})
}