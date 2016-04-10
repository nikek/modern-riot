import { state } from '../app'

<title>
  <script type="es6">
    state.on('update', () => this.root.innerHTML = state.get('example','title'))
  </script>
</title>
