import DefaultTheme from 'vitepress/theme'
import SnippetExplorer from './components/SnippetExplorer.vue'
import SnippetViewer from './components/SnippetViewer.vue'
import CopyButton from './components/CopyButton.vue'
import SnippetCard from './components/SnippetCard.vue'
import ProjectCard from './components/ProjectCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SnippetExplorer', SnippetExplorer)
    app.component('SnippetViewer', SnippetViewer)
    app.component('CopyButton', CopyButton)
    app.component('SnippetCard', SnippetCard)
    app.component('ProjectCard', ProjectCard)
  }
}
