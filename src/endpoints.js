import { ElMessage } from 'element-plus'

export async function exampleEndpoint() {
    try {
        const response = await fetch(`example/endpoint`)
        if (!response.ok) {
            throw new Error(`${response.status} ${await response.text()}`)
        }
        return (await response.json()).data
    } catch (error) {
        ElMessage.error(`Failed to fetch example data: ${error.message}`)
    }
}
