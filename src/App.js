import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedPalette from './seedPalette';
import { generatePalette } from './colorHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedPalette
    };
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id);
  }

  savePalette(newPalette) {
    this.setState(
      state => ({
        palettes: [...state.palettes, newPalette]
      }),
      this.syncLocalStorage
    );
  }

  deletePalette(id) {
    this.setState(
      state => ({
        palettes: state.palettes.filter(palette => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    const { palettes } = this.state;
    return (
      <Router>
        <div className="App">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="Page"
                  timeout={500}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/palette/new"
                      render={routeProps => (
                        <Page>
                          <NewPaletteForm
                            {...routeProps}
                            palettes={palettes}
                            savePalette={this.savePalette}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/"
                      render={routeProps => (
                        <Page>
                          <PaletteList
                            palettes={palettes}
                            deletePalette={this.deletePalette}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/palette/:id"
                      render={routeProps => (
                        <Page>
                          <Palette
                            palette={generatePalette(
                              this.findPalette(routeProps.match.params.id)
                            )}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/palette/:paletteId/:colorId"
                      render={routeProps => (
                        <Page>
                          <SingleColorPalette
                            palette={generatePalette(
                              this.findPalette(
                                routeProps.match.params.paletteId
                              )
                            )}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route render={() => <Redirect to="/" />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
