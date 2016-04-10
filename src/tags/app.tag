import {signals, state} from '../app.js'
import './color-title.tag'

<app>
  <div>
    <color-title
      color={ state.get().example.color }
      title={ state.get().example.title }
      ></color-title>
    <button onclick={ () => signals.example.colorChanged({color: 'red'}) }>Red</button> |
    <button onclick={ () => signals.example.colorChanged({color: 'blue'}) }>Blue</button>
  </div>

  <script>
    this.state = state
    this.signals = signals
    state.on('update', this.update)
  </script>
</app>
