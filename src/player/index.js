import 'howler'
import Events from './events'

const howlConfig = {
  html5: true,
  preload: false,
}

class Player {
  constructor() {
    this._playlist = []
    this._howlerMap = {}
    this._currentSong = null
    this._currentHowler = null

    Object.assign(this, Events)
  }

  play(id) {
    // if (this._howlerMap[id]) {
      // this._play(id)
    // } else {
      this.fetchLink(this._playlist.join(','))
        .then(({ data }) => {
          this._createHowlerMap(data)
          this._play(id)
        })
    // }
  }

  _createHowlerMap(data) {
    data.forEach(song => {
      this._howlerMap[song.id] = this._createHowler(song.id, song.url)
    })
  }

  setList(list) {
    if (Array.isArray(list)) {
      this._playlist = list
    }
  }

  pause(id) {
    this._currentHowler.pause()
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
    console.log(id,src)
    const howler = new Howl({
      src,
      ...howlConfig,
    })

    return howler
  }

  _play(id) {
    if (this._currentSong === id) {
      this._currentHowler.play()
    } else {
      this._stopCurrentHowler()
      this._currentHowler = this._howlerMap[id]
      this._currentHowler.play()
    }

    this.trigger('player:play', id)
    this._currentSong = id
  }

  _stopCurrentHowler() {
    if (this._currentHowler) {
      this._currentHowler.stop()
    }
  }

  fetchLink(ids) {
    ids = Array.isArray(ids) ? ids : [ids]
    const url = `/api/music/url?id=${ids.join(',')}`

    return fetch(url)
      .then(res => res.json())
  }
}

export default Player