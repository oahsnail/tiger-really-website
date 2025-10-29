export function isDesktop() {
    return screen.width > 1024
}

export function timestampToLocaleDateTime(timestamp) {
    /**
     * Convert UNIX timestamp into readable locale date and time string in format
     * (D)D/MM/YYYY, HH:MM:SS [AM/PM]
     * ex. 1/24/2025, 11:30:00 PM
     *
     * @param {int} timestamp The timestamp to convert
     */

    // Create a Date object from the timestamp
    const utcDate = new Date(timestamp * 1000)
    // Convert to local time and return formatted local string
    const localDateString = utcDate.toLocaleString('en-US')

    return localDateString
}

export function timestampToLocaleTime(timestamp) {
    /**
     * Convert UNIX timestamp into readable locale time string in format
     * HH:MM:SS [AM/PM]
     * ex. 11:30:00 PM
     *
     * @param {int} timestamp The timestamp to convert
     *
     */

    // Create a Date object from the timestamp
    const utcDate = new Date(timestamp * 1000)
    // Convert to local time and return formatted time string

    const localDateString = utcDate.toLocaleTimeString('en-US')

    return localDateString
}
