/**
 * Get formatted date
 * @param date
 */
export function getFormattedDate(date: string | undefined): string | undefined {
    if(!date) return;
    const options:  Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    return new Date(date).toLocaleDateString('en-US', options);
}

/**
 * Get the current date
 */
export function getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
}