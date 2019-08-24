import App, { Container } from 'next/app'
import { ThemeProvider, Styled, ColorMode } from 'theme-ui'
import Head from '../components/head'
import Header from '../components/header'
import reducer from '../reducers'
import { initModel, meta, theme } from '../constants'
import '../static/webFonts.css'
import 'modern-normalize/modern-normalize.css' //keep it the last import

export default class MyApp extends App {
  state = reducer(initModel, {})
  dispatch = action => this.setState(prevState => reducer(prevState, action))

  render() {
    const { Component } = this.props
    return (
      <Container>
        <Head {...meta} />
        <ThemeProvider {...{ theme }}>
          <ColorMode />
          <Header />
          <Styled.root>
            <Component model={this.state} dispatch={this.dispatch} />
          </Styled.root>
        </ThemeProvider>
      </Container>
    )
  }
}
