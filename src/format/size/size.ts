export const formatSize = (value: number): string => {
  if (!value) {
    return '0 B'
  }
  const units: Array<String> = [
    'B',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'YB'
  ]
  let index: number = Math.floor(Math.log(value) / Math.log(1024)) || 0
  let size: number = value / Math.pow(1024, index)
  return (size % 1 ? size.toFixed(2) : size) + ' ' + units[index]
}
