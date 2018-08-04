/**
 * @file 辅助类
 */

/**
 * 计算专辑发布的年份
 * 1461945600007 -> 2016
 */
function getPublishYear(time) {
  let publishYear = ''
  if (time > 0) {
    publishYear = (new Date(time)).getFullYear()
  }

  return publishYear
}

/**
 * 转换歌曲时长
 * 236080 -> 03:56
 */
function getDuration(duration) {
  if (!duration || duration <= 0) return '00:00'

  const minutes = Math.floor(duration / 60000)
  const seconds = Math.round((duration % 60000) / 1000)

  const arr = [minutes, seconds].map(num => String(num).padStart(2, 0))

  return arr.join(':')
}

function getPicUrl(url, size) {
  let result = url ? url : ''

  if (result && size) {
    result += `?param=${size}y${size}`
  }

  return result
}

export {
  getPublishYear,
  getDuration,
  getPicUrl,
}