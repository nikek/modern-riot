import './style.less' // This is a hook to make webpack package the css for us

import 'riot'
import './tags/app.tag'
import './tags/title.tag.js'

import Controller from 'cerebral'
import Model from 'cerebral-model-baobab'

const controller = Controller(Model({}))

riot.mount('app', {controller: controller})
riot.mount('title')
