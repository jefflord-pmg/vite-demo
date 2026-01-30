/**
 * Shared date formatting utilities
 */

export function formatDate(date: Date): string {
  return date.toLocaleDateString()
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString()
}

export function formatDateTime(date: Date): string {
  return `${formatDate(date)} ${formatTime(date)}`
}

export function formatRelative(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSecs < 60) return 'just now'
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
}

export function formatUntil(date: Date): string {
  const now = new Date()
  const diffMs = date.getTime() - now.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMs < 0) return 'already passed'
  if (diffSecs < 60) return 'less than a minute'
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''}`
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''}`
  return `${diffDays} day${diffDays > 1 ? 's' : ''}`
}

export function getNextChristmas(): Date {
  const now = new Date()
  const year = now.getMonth() === 11 && now.getDate() > 25 
    ? now.getFullYear() + 1 
    : now.getFullYear()
  return new Date(year, 11, 25)
}

export function formatISO(date: Date): string {
  return date.toISOString()
}
