import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import actions from '../../actions/page/userList'
import playActions from '../../actions/player/playlist'

import CurrentList from '../../components/CurrentList'
import Songlist from '../../components/Songlist'
import Background from '../../components/Background'

import styles from './index.styl'

class Artist extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { songs, info } = this.props

    return (
      <div>
        <section>
          <CurrentList
            type="userlist"
            picUrl={info.coverImgUrl}
            info={info}
          />
          <Songlist songs={songs} />
        </section>
        <Background imgUrl={info.picUrl} />
      </div>
    )
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    this.props.fetchUserListInfo(id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserListInfo(id) {
      dispatch(actions.fetchUserListInfo(id))
    }
  }
}

export default connect(state => {
  return {
    ...state.userList,
    ...state.playlist
  }
}, mapDispatchToProps)(Artist)