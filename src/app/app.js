import React, { Component } from "react"

export default class App extends Component {
  render() {
    return (
    	<div className="uk-container">
    		<h1 className="uk-heading-line uk-heading-primary uk-text-center uk-padding">
    			<span>Webpack 4 Starter</span>
    		</h1>

    		<p className="uk-text-lead uk-text-center">
    			Starter kit for creating projects using Webpack 4.
    		</p>

    		<h2 className="uk-text-center">The following is included:</h2>

    		<div className="uk-flex uk-margin">
			    <div className="uk-background-primary uk-padding uk-light uk-flex-1 uk-text-center">
			    	Bootstrap
			    </div>
			    <div className="uk-background-primary uk-padding uk-light uk-margin-left uk-flex-1 uk-text-center">
			    	UIkit
			    </div>
			    <div className="uk-background-primary uk-padding uk-light uk-margin-left uk-flex-1 uk-text-center">
			    	Font Aweome
			    </div>
				</div>
    	</div>
    )
  }
}