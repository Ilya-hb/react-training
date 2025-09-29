import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<any, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(`Error caught by ErrorBoundary: ${error} ${errorInfo}`);
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return <h2>Smh went wrong...</h2>;
    }
    return this.props.children;
  }
}
