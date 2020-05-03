import React from 'react';
import { BallSpinner } from 'react-spinners-kit';

export default function Button({
  placeholder = 'Do Action',
  isLoading = false,
}) {
  return (
    <div>
      <button type="submit" class="btn btn-block btn-success">
        {!isLoading ? (
          placeholder
        ) : (
          <div>
            <BallSpinner color="white" />
          </div>
        )}
      </button>
    </div>
  );
}
