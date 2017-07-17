import React from 'react'
import store from '../../store'
import {setEditingPost, changeView} from '../../actions'

const handleClick = key => {
  store.dispatch(setEditingPost(key))
  store.dispatch(changeView('content'))
}

const renderTitles = content => {
  let titles = []
  for (let key in content) {
    if (content.hasOwnProperty(key)) {
      titles.push(
        <div key={key} onClick={() => handleClick(key)}>
          <dt className="f6 b">{content[key].title}</dt>
          <dd className="ml0">Devil Got My Woman - Skip James</dd>
        </div>
      )
    }
  }
  return titles
}

export const Home = content =>
  <div>
    <span className="ma4 f4 b mb3 db">Posts</span>
    <dl className="lh-title pa4 mt0">
      {content && renderTitles(content)}
    </dl>
  </div>
