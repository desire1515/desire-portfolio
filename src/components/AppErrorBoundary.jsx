import { Component } from 'react';

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page rendering failed:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="container section-spacing" role="alert">
          <h1>Something went wrong while loading this page.</h1>
          <p>Check the browser console for details, then reload to try again.</p>
          <button type="button" className="button secondary" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
