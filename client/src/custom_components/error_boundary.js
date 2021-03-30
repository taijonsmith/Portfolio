import React from 'react';
import './css/error_boundary.css';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // logErrorToMyService(error, errorInfo);
      console.log(error)
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div id="error_message">
                <h1>Something went wrong!</h1>
                <h3>Please refresh the page and try again</h3>
            </div>
        )
      }
  
      return this.props.children; 
    }
} 