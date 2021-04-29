import React, { Component } from "react";
import { ForwardFormField } from "./FormField";
import { PortalWrapper } from "./PortalWrapper";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.fieldRef = React.createRef();
    this.portalFieldRef = React.createRef();
  }

  focusLocal = () => {
    this.fieldRef.current.focus();
  }
  
  focusPortal = () => {
    this.portalFieldRef.current.focus();
  }

  render() {
    return <div>
            <PortalWrapper>
              <ForwardFormField label="Nazwa" ref={this.portalFieldRef} />
            </PortalWrapper>

            <ForwardFormField label="Nazwa" ref={this.fieldRef} />
              <div className="text-center m-2">
                <button className="btn btn-primary m-1"
                    onClick={ this.focusLocal }>
                  Przejdź do lokalnego pola
                </button>
                <button className="btn btn-primary m-1"
                    onClick={ this.focusPortal }>
                  Przejdź do pola w portalu
                </button>
              </div>
            </div>
  }
}