import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import StoreInfo from "./components/StoreInfo/StoreInfo";

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
          <StoreInfo isMember={false}/> <br/>
          <StoreInfo isMember={true}/>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
