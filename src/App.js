import React from 'react';

import Authorize from 'react-authorize';

const App = () => {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <Authorize check={['LIST_DASHBOARD', 'EDIT_DASHBOARD']} fallback={<span>test</span>} permissionKey={'PERMISSIONS'}>
          <button>Go to Dashboard</button>
        </Authorize>
      </div>
    </div>
  );
};

export default App;
