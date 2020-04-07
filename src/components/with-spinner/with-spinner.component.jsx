import React from 'react'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-container">
        <div class="spinner">Loading...</div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
}

export default WithSpinner;