import 'howler'
import Events from './events'
import { howlConfig } from './config'


class Player {
  constructor() {
    this._playlist = []
    this._howlerMap = {}
    this._currentSong = null
    this._currentHowler = null

    Object.assign(this, Events)
  }

  play(id) {
    if (id === this._currentSong) {
      this._currentHowler.play()
      this.trigger('player:play', id)
    } else {
      this.fetchLink(id)
        .then(({ data }) => {
          this._play(id, data[0].url)
        })
    }
  }

  _play(id, url) {
    this._currentSong = id
    
    if (!url) {
      this.trigger('player:brokenurl', id)
      this.next()
      return
    }

    if (this._currentHowler) {
      this._currentHowler.unload()
    }

    this._currentHowler = this._createHowler(id, url)
    this._currentHowler.play()

    this.trigger('player:play', id)
  }

  /**
   * 创建Howler Map
   * 遇到音频无法播放问题，所以不再使用这个方法为每个音频创建Howler
   * @param {Array} data 选链数据 
   
  _createHowlerMap(data) {
    data.forEach(song => {
      this._howlerMap[song.id] = this._createHowler(song.id, song.url)
    })
  }*/

  setList(list) {
    if (Array.isArray(list)) {
      this._playlist = list
    }
  }

  pause(id) {
    this._currentHowler.pause()

    this.trigger('player:pause', id)
  }

  prev() {
    const index = this._getCurrentIndex()

    const prev = index === 0 ? this._playlist.length - 1 : index - 1

    this.play(this._playlist[prev])
  }

  next() {
    const index = this._getCurrentIndex()

    const next = index === this._playlist.length - 1 ? 0 : index + 1

    this.play(this._playlist[next])
  }

  _getCurrentIndex() {
    return this._playlist.indexOf(this._currentSong)
  }

  _createHowler(id, src) {
    const howler = new Howl({
      src,
      ...howlConfig,
    })

    return howler
  }

  fetchLink(ids) {
    ids = Array.isArray(ids) ? ids : [ids]
    const url = `/api/music/url?id=${ids.join(',')}`

    return fetch(url)
      .then(res => res.json())
  }
}

export default Player