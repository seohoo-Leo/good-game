import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-15 h-15 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default Spinner
