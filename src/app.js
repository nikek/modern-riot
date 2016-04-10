import Controller from 'cerebral'
import Model from 'cerebral-model-baobab'
import Router from 'cerebral-module-router'
import Devtools from 'cerebral-module-devtools'
import Example from './modules/Example'

const model = Model({})
const controller = Controller(model)

controller.addModules({
  example: Example(),

  devtools: Devtools(),
  router: Router({
    '/': 'example.redirectRoot',
    '/:color': 'example.colorChanged'
  }, {
    onlyHash: true
  })
})

export const state = model.tree
export const signals = controller.getSignals();
