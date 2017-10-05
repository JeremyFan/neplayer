import 'howler'

const howlConfig = {
  html5: true
}

class Player {
  constructor() {
    this._playlist = {}
    this._currentSong = null
    this._currentHowler = null
  }

  play(id) {
    if (this._playlist[id]) {
      this._play(id)
    } else {
      this.fetchLink(id)
        .then(({ data }) => {
          const url = data[0].url
          this._createHowler(id, url)
          this._play(id)
        })
    }
  }

  _createHowler(id, src) {
    const howler = new Howl({
      src,
      ...howlConfig,
    })

    this._playlist[id] = { howler }
  }

  _play(id) {
    this._stopCurrentHowler()
    this._currentHowler = this._playlist[id].howler
    this._currentHowler.play()
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