import React from 'react';

import { NotFound } from '@/screens/NotFound';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(error.message);
  }

  render() {
    const hasError = this.state.hasError;
    if (hasError) {
      return <NotFound error={true} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
