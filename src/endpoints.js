// TODO: Move all the endpoint calls to this file
import API_URL from '@/config'
import { ElMessage } from 'element-plus'

export async function addIOToApplication(application_id, module_id, io_functionality = null) {
    /*
    Add an IO to an application by sending a POST request to the backend
    If the io_functionality is not null, the IO will be added with the 
    specified functionality
    */
    try {
        const response = await fetch(`${API_URL}/api/add_io_to_application`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                application_id: application_id,
                module_id: module_id,
                io_functionality: io_functionality,
            }),
        })
        if (response.status === 200) {
            ElMessage.success('IO Added to Application')
        } else {
            ElMessage.error('Failed to add IO to Application: ' + (await response.text()))
        }
    } catch (error) {
        ElMessage.error('Failed to reach add_io_to_application: ' + error)
    }
}

export async function getApplications() {
    try {
        const response = await fetch(`${API_URL}/api/applications`)
        if (!response.ok) {
            throw new Error(`${response.status} ${await response.text()}`)
        }
        return (await response.json()).data
    } catch (error) {
        ElMessage.error('Failed to fetch applications')
    }
}

export async function getAssignedIOs(applicationID = '', outputType = '') {
    try {
        // To get all assigned IOs, call with no arguments
        const response = await fetch(
            `${API_URL}/api/get_assigned_ios` +
                '?' +
                new URLSearchParams({
                    application_id: applicationID,
                    io_type: outputType,
                }).toString(),
        )
        if (!response.ok) {
            throw new Error(`${response.status} ${await response.text()}`)
        }
        return (await response.json())['data']
    } catch (err) {
        ElMessage({
            showClose: true,
            message: err,
            type: 'error',
        })
    }
}

export async function getAssignableIOs(applicationID = null) {
    /*
    Get all connected IOs that are assignable to the current application.
    This means that the IO is:
        - not already assigned to the current application.
        - not an output already assigned to another application
            - if an output is assigned to another application, it is still returnend
            in the result but is marked as disabled

        If applicationID is not specified, then the function will return all 
        IOs except for outputs assigned to any application.
    
    @param {int} applicationID The ID of the current application

    @return {Array} An array of objects containing the module_id and io_functionality
            in the format {value: <module_id>, label: <io_functionality>, disabled: <bool>}
    */
    try {
        // Get all connected IOs
        const response = await fetch(`${API_URL}/api/get_connected_ios`)
        let data = (await response.json()).data

        // Filter for connected IOs that has not been assigned to current application
        let assignableIOs = []
        let assignedModuleIDs = new Set()
        let unavailableModuleIDs = new Set()
        let assignedIOsArr = []

        // Get all connected IOs that has been assigned to current application
        if (applicationID !== null) {
            const assignedIOs = await getAssignedIOs(applicationID)
            assignedIOsArr = Object.entries(assignedIOs)
        }

        const unavailableOutputs = await getAssignedIOs('', 'output')
        let unavailableOutputsArr = Object.entries(unavailableOutputs)

        for (let i = 0; i < assignedIOsArr.length; i++) {
            assignedModuleIDs.add(assignedIOsArr[i][1].module_id)
        }

        for (let i = 0; i < unavailableOutputsArr.length; i++) {
            unavailableModuleIDs.add(unavailableOutputsArr[i][1].module_id)
        }

        for (let i = 0; i < data.length; i++) {
            let disabled = false
            if (assignedModuleIDs.has(data[i].module_id)) {
                continue
            }
            if (unavailableModuleIDs.has(data[i].module_id)) {
                disabled = true
            }
            assignableIOs.push({
                value: data[i].module_id,
                label: String(data[i].io_functionality),
                disabled: disabled,
            })
        }
        return assignableIOs
    } catch (error) {
        ElMessage.error('Failed to fetch connected IOs' + error)
    }
}
