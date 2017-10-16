/**
 * @file 背景
 * @description 渐变+淡入背景图
 * @todo 切换时上一张淡出
 */

import React, { Component } from 'react'

import styles from './index.styl'
import { getPicUrl } from '../../util'

class Background extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.imgUrl != nextProps.imgUrl) {
      this.setState({
        loaded: false
      })
    }
  }

  render() {
    const className = this.state.loaded ? [styles.bgImage, styles.in].join(' ') : styles.bgImage

    return (
      <div className={styles.greatBg}>
        <img ref='img' className={className} src={getPicUrl(this.props.imgUrl, 500)} onLoad={this.handleImageLoaded.bind(this)} />
        <div className={styles.bgGradient}></div>
      </div>
    )
  }

  // componentDidMount(){
  //   this.refs.img.addEventListener('transitionend', () => {
  //     console.log('transition done')
  //   })
  // }

  handleImageLoaded() {
    this.setState({
      loaded: true
    })
  }
}

export default Background